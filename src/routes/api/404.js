module.exports.invalidPath = (req, res, next) => {
    res.status(404).json({
        message: '/URI does not exist'
    });
};