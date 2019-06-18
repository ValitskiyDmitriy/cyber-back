const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcryptjs');


const CharacterSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    male: {
        type: Number,
        required: true,
    },
});
//this enforces emails to be unique!
CharacterSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Character', CharacterSchema);
