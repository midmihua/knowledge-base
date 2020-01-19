const mongoose = require('mongoose');

// Set up mongodb path
const HOST = process.env.MONGO_HOST || 'localhost';
const PORT = process.env.MONGO_PORT || 27017;
const DB = process.env.MONGO_DB;

const uri = `mongodb://${HOST}:${PORT}/${DB}`;

// Return connection Promise
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
};

module.exports.connect = () => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(uri, options)
            .then(() => resolve({ uri }))
            .catch(error => reject(error));
    });
};

module.exports.close = () => {
    return mongoose.connection.close();
}