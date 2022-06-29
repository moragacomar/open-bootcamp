const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logger/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logger/combined.log' }),
    ],
});

module.exports = logger;