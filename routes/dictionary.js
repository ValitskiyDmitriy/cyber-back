const express = require('express');

const Male = require('../models/dictionary/male');
const Face = require('../models/dictionary/face');
const Body = require('../models/dictionary/body');
const SkinColor = require('../models/dictionary/skinColor');
const Clothing = require('../models/dictionary/clothing');
const Role = require('../models/dictionary/role');

const jwt = require('jsonwebtoken');
const router = express.Router();
const jwtConfig = require('../config/config');

router.get("/get-male", function(req, res) {
    var token = req.headers['x-access-token'];
    const { name, male} = req.body;
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, jwtConfig.development.JWT_SECRET, function(err, decoded) {
        if(err){
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }else{
             Male.find().lean().exec(function (err, users) {
                return res.end(JSON.stringify(users));
            })
            // res.status(200).send(maleList);
        }
    });
});
router.get("/get-face", function(req, res) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, jwtConfig.development.JWT_SECRET, function(err, decoded) {
        if(err){
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }else{
            Face.find().lean().exec(function (err, faces) {
                return res.end(JSON.stringify(faces));
            })
            // res.status(200).send(maleList);
        }
    });
});
router.get("/get-body", function(req, res) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, jwtConfig.development.JWT_SECRET, function(err, decoded) {
        if(err){
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }else{
            Body.find().lean().exec(function (err, bodys) {
                return res.end(JSON.stringify(bodys));
            })
            // res.status(200).send(maleList);
        }
    });
});
router.get("/get-skin-color", function(req, res) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, jwtConfig.development.JWT_SECRET, function(err, decoded) {
        if(err){
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }else{
            SkinColor.find().lean().exec(function (err, SkinColors) {
                return res.end(JSON.stringify(SkinColors));
            })
            // res.status(200).send(maleList);
        }
    });
});
router.get("/get-clothing", function(req, res) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, jwtConfig.development.JWT_SECRET, function(err, decoded) {
        if(err){
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }else{
            Clothing.find().lean().exec(function (err, clothings) {
                return res.end(JSON.stringify(clothings));
            })
            // res.status(200).send(maleList);
        }
    });
});
router.get("/get-role", function(req, res) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, jwtConfig.development.JWT_SECRET, function(err, decoded) {
        if(err){
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }else{
            Role.find().lean().exec(function (err, roles) {
                return res.end(JSON.stringify(roles));
            })
            // res.status(200).send(maleList);
        }
    });
});

module.exports = router;
