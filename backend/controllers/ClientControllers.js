const ClientModel = require("../models/ClientModel");

module.exports.getClients = async (req, res) => {
    const client = await ClientModel.find();
    res.send(client);
    // res.send("Hello")
};

module.exports.saveClient = async (req, res) => {
    const { client } = req.body;

    ClientModel.create({client})
    .then((data) => {
        console.log("Saved successfully!");
        res.status(201).send(data);
    }).catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong!"})
    })
};

module.exports.updateClient = (req, res) => {
    const {id} = req.params;
    const {client} = req.body;

    ClientModel.findByIdAndUpdate(id, {client})
    .then(() => res.send("Updated successfully!"))
    .catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong!"})
    })
};

module.exports.deleteClient = (req, res) => {
    const {id} = req.params;

    ClientModel.findByIdAndDelete(id)
    .then(() => res.send("Deleted successfully!"))
    .catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong!"})
    })
};