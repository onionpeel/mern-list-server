const mongoose = require('mongoose');

// establish the connection with the database
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

mongoose.connect(`mongodb://testing1:testing2@ds161074.mlab.com:61074/mernlistdb`, { useNewUrlParser: true });


module.exports = {mongoose};
