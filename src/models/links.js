const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkSchema = new Schema(
    {
        link: {
            type: String,
            unique: true,
            required: [true, 'Link is required']
        },
        props: [
            {
                property:
                {
                    type: String,
                    unique: true,
                    required: [true, 'Property is required'],
                    min: [2, 'Property should be 2 symbols or more'],
                    max: [255, 'Property is too long'],
                    set: v => v.toLowerCase()
                },
                value:
                {
                    type: String
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

module.exports = mongoose.model('Link', linkSchema);