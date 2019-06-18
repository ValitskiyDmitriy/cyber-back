const express = require('express');
const bcrypt = require('bcryptjs');
const Character = require('../models/character/character');
const Appearance = require('../models/character/appearance');
const jwt = require('jsonwebtoken');
const router = express.Router();
const jwtConfig = require('../config/config');


router.post("/create", function(req, res) {
    var token = req.headers['x-access-token'];
    const {  name, male} = req.body;
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, jwtConfig.development.JWT_SECRET, function(err, decoded) {
        if(err){
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }else{
            res.status(200).send(decoded);
            const userId = decoded.id;
            const character = new Character({ name, male, userId });
            const persistedUser = character.save();
        }
    });
});
router.post("/appearance-character", function(req, res) {
    var token = req.headers['x-access-token'];
    const {characterId, face, body, clothing, skinColor} = req.body;
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, jwtConfig.development.JWT_SECRET, function(err, decoded) {
        if(err){
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }else{
            const appearance = new Appearance({characterId, face, body, clothing, skinColor});
            const persistedUser = appearance.save();
            res.status(200).send(decoded);
        }
    });
});


module.exports = router;
