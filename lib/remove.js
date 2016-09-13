var mongo = require('mongodb').MongoClient;

var dbName         = process.argv[2]
var collectionName = process.argv[3]
var documentId     = process.argv[4]
var url            = 'mongodb://localhost:27017/' + dbName

mongo.connect(url, function(error, db) {
  if (error) throw error

  var myCollection = db.collection(collectionName)

console.log(documentId)

  myCollection.remove( { _id: documentId }, function(error, result) { 
    if (error) throw error
    db.close();
  });
});
