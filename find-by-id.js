const Kitten = require( "./models/kittenModel");

function findById(id, done){
    Kitten.find(id, function(err, kittens) {
        done(kittens);
    });
    
}


module.exports = findById;