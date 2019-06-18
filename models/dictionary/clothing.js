const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const clothingSchema = new mongoose.Schema({
    clothingId: {
        type: Number,
        required: true,
    },
    clothingUrl: {
        type: String,
        required: true,
        unique: true,
    },
});
clothingSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Clothing', clothingSchema);
