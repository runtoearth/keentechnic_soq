const { Router } = require('express');
const ClientModel = require('../models/ClientModel.js');

const router = Router();

router.post('/', async (req, res) => {
    try { 
        if (
            !req.body.clientName ||
            !req.body.orgName ||
            !req.body.email ||
            !req.body.projectType
        ) {
            return res.status(400).send ({
                message: 'Please fill out all fields'
            });
        }
        const newClient = {
            clientName: req.body.clientName,
            orgName: req.body.orgName,
            email: req.body.email,
            projectType: req.body.projectType
        };

        const client = await ClientModel.create(newClient);

        return res.status(201).send(client);
    } catch (err) {
        console.log(err);
        res.status(500).send({message: err.message});
    }
})


module.exports = router;