let configObject = require('./config.json');
let dbUri = configObject.MONGODB_URI;

process.env.MONGODB_URI = dbUri;
