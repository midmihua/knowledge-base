module.exports.errorHandling = (error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = {
        message: error.message,
        array: error.array
    }
    res.status(status).json(message);
}