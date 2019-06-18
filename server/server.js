const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const { getSecret } = require('./secrets');
//other imports
const usersRoute = require('../routes/users');
const characterRoute = require('../routes/character');
const dictionaryRoute = require('../routes/dictionary');
//other app.use statements

mongoose.Promise = global.Promise;
mongoose
    .connect(
        getSecret('dbUri'),
        { useNewUrlParser: true }
    )
    .then(
        () => {
            console.log('Connected to mongoDB');
        },
        (err) => console.log('Error connecting to mongoDB', err)
    );
const app = express();
app.use(cors());
app.options('*', cors());
const port = process.env.PORT || 3000;
//sets up the middleware for parsing the bodies and cookies off of the requests
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/users', usersRoute);
app.use('/api/character', characterRoute);
app.use('/api/dictionary', dictionaryRoute);
app.get('/', function(req, res){
    res.json({"tutorial" : "Build REST API with node.js"});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = { app };
