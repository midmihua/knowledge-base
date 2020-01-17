const path = require('path');
const fs = require('fs');
const morgan = require('morgan');

module.exports.logging = (app) => {

    const file_name =
        (process.env.NODE_ENV == 'local') ? process.env.APP_LOCAL_LOG : process.env.APP_LOG;

    const accessLogStream = fs.createWriteStream(
        path.join(__dirname, file_name),
        { flags: 'a' }
    );

    app.use(morgan('combined', { stream: accessLogStream }));
};