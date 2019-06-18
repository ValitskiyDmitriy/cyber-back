const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const MaleSchema = new mongoose.Schema({
    maleId: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
    },
});
MaleSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Male', MaleSchema);
