const mongoose = require('mongoose');

const Client = new mongoose.Schema({
    clientName: {
        type: String,

    },
    orgName: {
        type: String,

    },
    email: {
        type: String,

    },
    projectType: {
        type: String,

    }
});

module.exports = mongoose.model('Client', Client);