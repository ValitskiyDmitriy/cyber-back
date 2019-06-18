const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const BodySchema = new mongoose.Schema({
    bodyId: {
        type: Number,
        required: true,
    },
    bodyUrl: {
        type: String,
        required: true,
        unique: true,
    },
});
BodySchema.plugin(uniqueValidator);
module.exports = mongoose.model('Body', BodySchema);
