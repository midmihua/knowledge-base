const { body, check } = require('express-validator');

const { notify } = require('../../../utils/notification');

module.exports.validatePut = (Link) => {
    return [
        check('props.*.property')
            .trim()
            .isLength({ min: 2, max: 255 })
            .withMessage(notify.fieldSymbolsBetween('property', 2, 255)),
        check('props.*.value')
            .trim()
            .isLength({ min: 1 })
            .withMessage(notify.fieldSymbolsEqualOrMore('value', 1))
    ];
};

module.exports.validatePost = (Link) => {
    return [
        body('link')
            .trim()
            .not()
            .isEmpty()
            .custom((value, { req }) => {
                return Link.findOne({ link: value.trim() })
                    .then(document => {
                        if (document)
                            return Promise.reject(notify.fieldExists('link'));
                    });
            }),
        check('props.*.property')
            .trim()
            .isLength({ min: 2, max: 255 })
            .withMessage(notify.fieldSymbolsBetween('property', 2, 255)),
        check('props.*.value')
            .trim()
            .isLength({ min: 1 })
            .withMessage(notify.fieldSymbolsEqualOrMore('value', 1))
    ];
};