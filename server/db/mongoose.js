const mongoose = require('mongoose');

// establish the connection with the database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = {mongoose};
