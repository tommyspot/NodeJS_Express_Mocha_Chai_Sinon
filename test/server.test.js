var expect = require("chai").expect;
var request = require("request");
var nock = require("nock");

// For Nock - simulate HTTP request
describe("Calculator API for Nock library", function () {

  describe("Add function", function () {
    var url, addFuncCall;

    beforeEach(function () {
      url = "http://localhost:3000/add?a=1&b=2";
      addFuncCall = nock('http://localhost:3000')
        .get('/add?a=1&b=2')
        .reply(200, '3');
    });

    it("returns status 200", function (done) {
      request(url, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns right value", function (done) {
      request(url, function (error, response, body) {
        expect(body).to.equal('3');
        done();
      });
    });

    afterEach(function(){
      nock.cleanAll();
    });

  });
});

//Testing need to start server
describe("Server: load default /", function(){
  it("returns status is valid body", function(done){
    var url = "http://localhost:3000/";
    request(url, function(error, response, body){
      expect(body).to.equal('{"status":200,"message":"Hello World"}');
      done();
    });
  })
});