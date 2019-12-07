const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

async function start() {
    try {
        mongoose.connect("mongodb://localhost/city-db",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            });
        app.listen(4000, () => {
            console.log("server is listening");
        });
        app.use(bodyParser.json());
        app.use("/api", require("./api"));
    }
    catch (e) {
        console.log(e)
    }
}

start();



