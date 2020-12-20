const mongoose = require('mongoose');

const experimentSchema = new mongoose.Schema({
    hero: Boolean,
    zero: Boolean
})

module.exports = mongoose.model('Experiment', experimentSchema);