const express = require('express');
const cors = require('cors');
const database = require('./src/database/db.config');
require('dotenv').config();

const app = express();

// Configuration CORS pour donner lacces a communiquer entre front et back
app.use(cors(  {origin: 'http://localhost:4200'} )); // Activer CORS pour toutes les origines
// Pour restreindre à une origine spécifique, utilisez :
// app.use(cors({ origin: 'http://localhost:4200' }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

database.mongoose.connect(database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to database');
}).catch(err => {
    console.log(err);
});

app.get('/', (req, res) => {
    res.send({ message: 'Hello, World!' });
});

// Routes
require('./src/api/routes/routes')(app);

app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT);
});
