const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const roleSchema = new mongoose.Schema({
    roleId: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
    },
});
//this enforces emails to be unique!
roleSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Role', roleSchema);
