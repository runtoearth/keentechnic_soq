const express = require('express');

const mongoose = require('mongoose');
require("dotenv").config();

const routes = require("./routes/ClientRoute");
const ClientModel = require("./models/ClientModel");

const cors = require('cors');

const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT | 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());

app.use('/client', routes);

app.get('/', (req, res) => {
    console.log(req);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected!"))
    .catch((err) => console.log(err));

app.use("/api", routes);
