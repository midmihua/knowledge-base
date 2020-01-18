const jwt = require('jsonwebtoken');

const { ValidationError } = require('../utils/validationError');
const { notify } = require('../utils/notification');

module.exports = (req, res, next) => {
    try {
        const authHeader = req.get('Authorization');

        if (!authHeader) {
            throw new ValidationError(notify.generalNotAuthenticated(), 401);
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            throw new ValidationError(notify.incorrectHeaderValue('Authorization'), 401);
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        if (!decodedToken) {
            throw new ValidationError(notify.generalNotAuthenticated(), 401)
        }
        
        req.userId = decodedToken.userId;
        return next();

    } catch (error) {
        error.statusCode = error.statusCode ? error.statusCode : 500;
        return next(error);
    }
};