const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const FaceSchema = new mongoose.Schema({
    faceId: {
        type: Number,
        required: true,
    },
    faceUrl: {
        type: String,
        required: true,
        unique: true,
    },
});
FaceSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Face', FaceSchema);
