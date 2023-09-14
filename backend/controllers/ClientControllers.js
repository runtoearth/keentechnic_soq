const ClientModel = require("../models/ClientModel");


module.exports.getClients = async (req, res) => {
    const client = await ClientModel.find();
    res.send(client);
    res.send("Hello")
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

