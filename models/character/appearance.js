const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const AppearanceSchema = new mongoose.Schema({
    characterId: {
        type: String,
        required: true,
        unique: true,
    },
    face: {
        type: Number,
        required: true,
    },
    body: {
        type: Number,
        required: true,
    },
    clothing: {
        type: Number,
        required: true,
    },
    skinColor: {
        type: Number,
        required: true,
    },
});
//this enforces emails to be unique!
AppearanceSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Appearance', AppearanceSchema);
