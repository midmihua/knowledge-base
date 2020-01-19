const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { ValidationError } = require('../../utils/validationError');
const { notify } = require('../../utils/notification');

const User = require('../../models/users');

module.exports.getUsers = async (req, res, next) => {
    try {
        const collection = await User.find();

        if (!collection)
            throw new ValidationError(notify.collectionNotFetched('User'), 404);

        const responseCode = collection && Array.isArray(collection) && collection.length > 0 ? 200 : 204;

        return res.status(responseCode).json({
            message: notify.collectionFetched('User'),
            collection
        });

    } catch (error) {
        error.statusCode = error.statusCode ? error.statusCode : 500;
        return next(error);
    }
};

module.exports.signup = async (req, res, next) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const error = new ValidationError(notify.generalIncorrectData(), 422, errors.array());
            return next(error);
        }

        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = new User({
            username,
            email,
            password: hashedPassword
        });

        const result = await user.save();

        if (!result) {
            const error = new ValidationError(notify.entityNotCreated('New user'), 404);
            return next(error);
        }

        return res.status(201).json({
            message: notify.entityCreated('User'),
            result
        });

    } catch (error) {
        error.statusCode = error.statusCode ? error.statusCode : 500;
        return next(error);
    }
};

module.exports.login = async (req, res, next) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const error = new ValidationError(notify.generalIncorrectData(), 422, errors.array());
            return next(error);
        }

        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            throw new ValidationError(notify.entityNotFound('User'), 404);
        }

        const isEqual = await bcrypt.compare(password, user.password);

        if (!isEqual) {
            throw new ValidationError(notify.incorrectEntityProvided('password'), 401);
        }

        const token = jwt.sign(
            {
                email: user.email,
                userId: user._id.toString()
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.EXPIRES_IN || '1h'
            }
        );
        return res.status(200).json({
            token,
            userId: user._id.toString()
        });

    } catch (error) {
        error.statusCode = error.statusCode ? error.statusCode : 500;
        return next(error);
    }
};
