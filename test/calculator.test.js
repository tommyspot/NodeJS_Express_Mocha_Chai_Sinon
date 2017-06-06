var expect = require("chai").expect;
var sinon = require("sinon");
var calculator = require("../calculator");

describe("Calculator", function () {

  describe("Add function", function () {
    it("adds 2 positive numbers", function () {
      var result = calculator.add(1, 2);
      expect(result).to.equal(3);
    });
    it("adds 2 nagative numbers", function () {
      var result = calculator.add(-1, -5);
      expect(result).to.equal(-6);
    });
  });

  describe("Subtract function", function () {
    it("subtracts 2 positive numbers", function () {
      var result = calculator.subtract(1, 2);
      expect(result).to.equal(-1);
    });
    it("subtracts 2 nagative numbers", function () {
      var result = calculator.subtract(-1, -5);
      expect(result).to.equal(4);
    });
  });
});

describe("Sinon testing", function () {
  it("calls function by stub", function () {
    var callFunc = sinon.stub(calculator, "foo1", function () {
      return 'foo1_test';
    });
    var result = calculator.foo();
    expect(callFunc.callCount).to.equal(2);
  });

  it("calls function by spy", function () {
    var callFunc = sinon.spy(calculator, "foo1");
    var result = calculator.foo();
    expect(callFunc.callCount).to.equal(2);
  })

  afterEach(function () {
    calculator.foo1.restore();
  })
})