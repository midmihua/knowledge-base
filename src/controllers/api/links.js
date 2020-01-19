const { validationResult } = require('express-validator');

const { ValidationError } = require('../../utils/validationError');
const { notify } = require('../../utils/notification');

const Link = require('../../models/links');

module.exports.getLink = async (req, res, next) => {
    try {
        const linkID = req.params.id;

        const collection = linkID ? await Link.findById(linkID) : await Link.find();

        if (!collection)
            throw new ValidationError(notify.collectionNotFetched('Link'), 404);

        let responseCode = 204;

        if ((collection && Array.isArray(collection) && collection.length > 0) ||
            (collection && Object.keys(collection).length > 0)) {
            responseCode = 200;
        }

        return res.status(responseCode).json({
            message: notify.collectionFetched('Link'),
            collection
        });

    } catch (error) {
        error.statusCode = error.statusCode ? error.statusCode : 500;
        return next(error);
    }
};

module.exports.create = async (req, res, next) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const error = new ValidationError(notify.generalIncorrectData(), 422, errors.array());
            return next(error);
        }

        const { link, props } = req.body;

        const newLink = new Link({
            link,
            props,
            creator: req.userId
        });

        const result = await newLink.save();

        if (!result) {
            const error = new ValidationError(notify.entityNotCreated('New link'), 404);
            return next(error);
        }

        return res.status(201).json({
            message: notify.entityCreated('Link'),
            result
        });

    } catch (error) {
        error.statusCode = error.statusCode ? error.statusCode : 500;
        return next(error);
    }
};

module.exports.update = async (req, res, next) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const error = new ValidationError(notify.generalIncorrectData(), 422, errors.array());
            return next(error);
        }

        const linkID = req.params.id;

        if (!linkID) {
            const error = new ValidationError(notify.paramsIdNotFound('link._id'), 404);
            return next(error);
        }

        const linkToUpdate = await Link.findById(linkID);

        if (!linkToUpdate) {
            const error = new ValidationError(notify.entityNotFound('link'), 404);
            return next(error);
        }

        if (linkToUpdate.creator.toString() !== req.userId) {
            const error = new ValidationError(notify.generalNotAuthenticated(), 401);
            return next(error);
        }

        const { link, props } = req.body;

        linkToUpdate.link = link;
        linkToUpdate.props = props;

        const result = await linkToUpdate.save();

        if (!result) {
            const error = new ValidationError(notify.entityNotUpdated('link'), 404);
            return next(error);
        }

        return res.status(201).json({
            message: notify.entityUpdated('Link'),
            result
        });

    } catch (error) {
        error.statusCode = error.statusCode ? error.statusCode : 500;
        return next(error);
    }
};

module.exports.delete = async (req, res, next) => {
    try {
        const linkID = req.params.id;

        if (!linkID) {
            const error = new ValidationError(notify.paramsIdNotFound('link._id'), 404);
            return next(error);
        }

        const linkToDelete = await Link.findById(linkID);

        if (!linkToDelete) {
            const error = new ValidationError(notify.entityNotFound('link'), 404);
            return next(error);
        }

        if (linkToDelete.creator.toString() !== req.userId) {
            const error = new ValidationError(notify.generalNotAuthenticated(), 401);
            return next(error);
        }

        const result = await Link.findByIdAndRemove(linkID);

        if (!result) {
            const error = new ValidationError(notify.entityNotRemoved('link'), 404);
            return next(error);
        }

        return res.status(201).json({
            message: notify.entityRemoved('Link'),
            result
        });

    } catch (error) {
        error.statusCode = error.statusCode ? error.statusCode : 500;
        return next(error);
    }
};