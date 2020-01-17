module.exports.invalidPath = (req, res, next) => {
    res.status(404).json({
        message: 'Provided api path does not exist'
    });
};