var mongoose = require("mongoose");
//mongoose.connect('mongodb://localhost:27017/demoDb'); 
mongoose.connect('mongodb://dbtommyspot:123456@ds151117.mlab.com:51117/winwheel');
// var conn = mongoose.connection;             
// conn.on('error', console.error.bind(console, '-----connection error:'));  
// conn.once('open', function() {
//   // Wait for the database connection to establish, then start the app.                         
// });

var mongoSchema = mongoose.Schema;
var userSchema = {
  "userEmail": String,
  "userPassword": String
};
module.exports = mongoose.model('userLogin', userSchema);
