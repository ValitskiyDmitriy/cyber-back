const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const skinColorSchema = new mongoose.Schema({
    skinColorId: {
        type: Number,
        required: true,
    },
    skinUrl: {
        type: String,
        required: true,
        unique: true,
    },
});
skinColorSchema.plugin(uniqueValidator);
module.exports = mongoose.model('SkinColor', skinColorSchema);
