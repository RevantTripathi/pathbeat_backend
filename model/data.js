const mongoose = require("mongoose");


const dataSchema = new mongoose.Schema({
    title: String,
    shortDesc: String,
    longDesc: String,
    imageUrl: String
});

module.exports = mongoose.model("Data", dataSchema);

