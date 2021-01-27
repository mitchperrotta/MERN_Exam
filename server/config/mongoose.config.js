const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/exam2", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Found the mongoose"))
    .catch(err => console.log("Did not find the mongoose", err));