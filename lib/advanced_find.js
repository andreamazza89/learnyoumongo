var mongo = require('mongodb').MongoClient;

var minimumAge = parseInt(process.argv[2])
var url = 'mongodb://localhost:27017/learnyoumongo'
var output = []
var findAgeParameter = { "age": { $gt: minimumAge } }
var extractFieldsParameter = { _id: 0 } 

mongo.connect(url, function(error, db){

  var parrotsCursor = db.collection('parrots').find(findAgeParameter, extractFieldsParameter);

  parrotsCursor.each(function(err, doc) {
    if (doc != null) {
      output.push(doc);
    } else {
      console.log(output); db.close();
    };
  });
});
