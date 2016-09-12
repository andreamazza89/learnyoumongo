var output = []

var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(error, db){

  var parrotsCursor = db.collection('parrots').find({ "age": { $gt: parseInt(process.argv[2]) } });

  parrotsCursor.each(function(err, doc) {
    if (doc != null) {
      output.push(doc);
    } else {
      console.log(output);
      db.close();
    };
  });
});
