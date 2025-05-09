const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, 'config.env') });  
const mongoose = require('mongoose');

const DB = process.env.DATABASE;

const DBConnection = () => {
    mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Connection successful');
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = DBConnection;