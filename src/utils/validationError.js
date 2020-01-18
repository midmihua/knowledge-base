module.exports.ValidationError = class extends Error {

    constructor(message, code, ...params) {
        super(...params);
        this.message = message;
        this.statusCode = code;
    }
};