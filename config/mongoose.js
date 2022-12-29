const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/social_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error in connecting to database"));

db.once('open', function(){
    console.log('Connected to Database::Mongodb');
})

module.exports = db;