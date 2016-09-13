var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo'
var minimumAge = parseInt(process.argv[2])
var findAgeParameter = { "age": { $gt: minimumAge } }

mongo.connect(url, function(error, db) {
  if (error) throw error

  var parrots = db.collection('parrots')

  parrots.count( findAgeParameter, function(error, count) { 
    if (error) throw error
    console.log(count);
    db.close();
  });
});

