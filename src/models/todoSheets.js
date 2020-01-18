const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSheetSchema = new Schema(
    {
        sheet:
        {
            type: String,
            required: [true, 'Sheet name is required'],
            min: [3, 'Sheet name should be 3 symbols or more'],
            max: [255, 'Sheet name is too long']
        },
        links:
            [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Link'
                }
            ],
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Creator is required']
        }
    }
);

todoSheetSchema.index({ sheet: 1, creator: 1 }, { unique: true });

module.require = mongoose.model('TodoSheet', todoSheetSchema);