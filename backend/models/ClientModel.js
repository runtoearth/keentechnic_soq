const mongoose = require('mongoose');

const Client = new mongoose.Schema({
    clientName: String,
    orgName: String,
    email: String,
    projectType: String
});

const ClientModel = mongoose.model('Client', Client);
module.exports = ClientModel;