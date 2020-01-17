const app = require('./app');
const db = require('./db');

const port = process.env.HTTP_PORT;
let server;
let uri;

// Connect to db and start app
db.connect()
    .then((response, error) => {
        if (error)
            throw new Error(error);

        uri = response.uri;
        server = app.listen(port, () => {
            console.log(`Listening on ${port}`);
            console.log(`ENV: ${process.env.NODE_ENV}`);
            console.log(`MONGO: ${uri}`);
        });
    });

// Shutdown
const stopHandler = () => {
    db && db.close()
        .then((response) => {
            console.log(`MONGO connection closed on: ${response && response.uri ? response.uri : uri}`);
        });

    server && server.close(() => {
        console.log(`Server stopped on ${port}`);
    });
};

// Exit events listener
process.on('SIGTERM', stopHandler);
process.on('SIGINT', stopHandler);