const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkSchema = new Schema(
    {
        link: {
            type: String,
            required: [true, 'Link is required'],
            unique: true,
            set: v => v.trim()
        },
        props: [
            {
                property:
                {
                    type: String,
                    required: [true, 'Property is required'],
                    min: [2, 'Property should be 2 symbols or more'],
                    max: [255, 'Property is too long'],
                    set: v => v.toLowerCase().trim()
                },
                value:
                {
                    type: String,
                    min: [1, 'Value should be 1 symbol or more'],
                    required: [true, 'Value is required'],
                    set: v => v.trim()
                }
            }
        ],
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Creator is required']
        }
    },
    {
        timestamps: true
    }
);

// TBD
// linkSchema.index({ link: 1, "props.property": 1 }, { unique: true });

module.exports = mongoose.model('Link', linkSchema);