var mongoose = require('mongoose');

var KittySchema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    age: Number,
    breed: String
});

var Kitten = mongoose.model('Kitten', KittySchema);

module.exports = Kitten