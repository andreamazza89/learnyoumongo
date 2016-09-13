var mongo = require('mongodb').MongoClient;

var dbName = process.argv[2]
var url    = 'mongodb://localhost:27017/' + dbName

mongo.connect(url, function(error, db) {

  if (error) throw error

  var usersCollection = db.collection('users')

  usersCollection.update({ username: 'tinatime'}, { $set: { age: 40 } }, function() { db.close() });

});

