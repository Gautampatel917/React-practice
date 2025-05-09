const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, 'config.env') });
const app = require('./app.js');
const DBConnection = require('./model/DBconnection.js');

console.log('DATABASE env variable:', process.env.DATABASE);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
DBConnection();