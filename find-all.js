const Kitten = require( "./models/kittenModel");

function findAll(done){
    Kitten.find(function(err, kittens) {
        done(kittens);    
    });
    
}

module.exports = findAll;