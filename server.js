// https://codequs.com/p/B108Pqbt/build-a-restful-api-with-node-js-and-mongodb/
// coverage test: "istanbul cover node_modules\mocha\bin\_mocha -- -R spec"

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoOp = require("./models/mongo");
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": false }));

router.get("/", function (req, res) {
  res.json({ "status": 200, "message": "Hello World" });
});

router.route("/users")
  .get(function (req, res) {
    var response = {};
    mongoOp.find({}, function (err, data) {
      if (err) {
        response = { "status": 404, "message": "Error fetching data" };
      } else {
        response = { "status": 200, "message": data };
      }
      res.json(response);
    });
  })
  .post(function (req, res) {
    var db = new mongoOp();
    var response = {};
    db.userEmail = req.body.email;
    db.userPassword = require('crypto').createHash('sha1').update(req.body.password).digest('base64');
    db.save(function (err) {
      if (err) {
        response = { "status": 501, "message": "Error adding data" };
      } else {
        response = { "status": 200, "message": "Data added" };
      }
      res.json(response);
    });
  });

router.route("/users/:id")
  .get(function (req, res) {
    var response = {};
    mongoOp.findById(req.params.id, function (err, data) {
      if (err) {
        response = { "status": 501, "message": "Error fetching data" };
      } else {
        response = { "status": 200, "message": data };
      }
      res.json(response);
    });
  })
  .put(function (req, res) {
    var response = {};
    mongoOp.findById(req.params.id, function (err, data) {
      if (err) {
        response = { "status": 501, "message": "Error fetching data" };
      } else {
        if (req.body.email !== undefined) {
          data.userEmail = req.body.email;
        }
        if (req.body.password !== undefined) {
          data.userPassword = req.body.password;
        }
        data.save(function (err) {
          if (err) {
            response = { "status": 501, "message": "Error updating data" };
          } else {
            response = { "statusv": 200, "message": "Data is updated for " + req.params.id };
          }
          res.json(response);
        })
      }
    });
  })
  .delete(function (req, res) {
    var response = {};
    mongoOp.findById(req.params.id, function (err, data) {
      if (err) {
        response = { "status": 501, "message": "Error fetching data" };
      } else {
        mongoOp.remove({ _id: req.params.id }, function (err) {
          if (err) {
            response = { "status": 501, "message": "Error deleting data" };
          } else {
            response = { "status": 200, "message": "Data associated with " + req.params.id + "is deleted" };
          }
          res.json(response);
        });
      }
    });
  })

app.use('/', router);

app.listen(3000);
console.log("Listening to PORT 3000");
