const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username:
        {
            type: String,
            required: [true, 'Username is required'],
            min: [3, 'Username should be 3 symbols or more'],
            max: [30, 'Username is too long'],
        },
        email:
        {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            set: v => v.toLowerCase()
        },
        password:
        {
            type: String,
            required: [true, 'Password is required'],
            min: [6, 'Password should be 6 symbols or more']
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', userSchema);