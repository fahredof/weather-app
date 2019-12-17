const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
    cities: Object
});

const City = mongoose.model("citie", citySchema);

module.exports = City;