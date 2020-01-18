const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

const User = require('../../models/users');
const { ValidationError } = require('../../utils/validationError');
const { notify } = require('../../utils/notification');

module.exports.getUsers = async (req, res, next) => {
    try {
        const collection = await User.find();

        if (!collection)
            throw new ValidationError(notify.collectionNotFetched('User'), 404);

        const responseCode = collection && Array.isArray(collection) && collection.length > 0 ? 200 : 204;

        res.status(responseCode).json({
            message: notify.collectionFetched('User'),
            collection
        });
        return;

    } catch (error) {
        error.statusCode = error.statusCode ? error.statusCode : 500;
        next(error);
        return error;
    }
};

module.exports.signup = () => { };

module.exports.login = () => { };

