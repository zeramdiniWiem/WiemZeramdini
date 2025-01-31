const config = require('../config/config');
const mongoose = require('mongoose'); 
const db = {};
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);
db.mongoose = mongoose;
db.url = config.DB_URL;
db.chaussures = require('../api/models/chaussure.model')(mongoose); 
db.magasins = require('../api/models/magasin.model')(mongoose); 

module.exports = db;

