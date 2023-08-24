const { Router } = require('express');

const { getClients, saveClient, updateClient, deleteClient } = require("../controllers/ClientControllers")

const router = Router();

router.get("/get", getClients);
router.post("/save", saveClient);
router.put("/update/:id", updateClient);
router.delete("/delete/:id", deleteClient);

module.exports = router;