var mongo = require('mongodb').MongoClient;

var firstName   = process.argv[2]
var lastName    = process.argv[3]
var newDocument = { firstName: firstName, lastName: lastName}
var url         = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(error, db) {
  if (error) throw error

  var docsCollection = db.collection('docs')
  

  docsCollection.insert(newDocument, function(error, result) {
    if (error) throw error
    console.log(JSON.stringify(newDocument));
    db.close();
  });

});
