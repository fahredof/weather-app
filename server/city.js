const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
    cityId: Number,
    city: String
});

const City = mongoose.model("citie", citySchema);

module.exports = City;