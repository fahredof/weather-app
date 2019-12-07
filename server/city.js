const mongoose = require("mongoose");
//const Schema = mongoose.Schema();

const citySchema = new mongoose.Schema({
    name: String
});

const City = mongoose.model("citie", citySchema);

module.exports = City;