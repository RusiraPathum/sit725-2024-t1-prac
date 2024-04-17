const { expect } = require("chai");
const request = require("request");

let url = "http://localhost:3000/api/cat";

let cat = { name: "test cat" };

describe("descript name", function () {
  it("it GET", function (done) {
    request(url, function (a, b, c) {
      console.log(arguments);

      let responseObj = JSON.parse(c);

      expect(responseObj).to.be.an("object");

      done();
    });
  });
});

describe("descript POST", function () {
  it("Test POST", function (done) {
    request.post({ url: url, form: cat }, function (a, b, c) {
      let responseObj = JSON.parse(c);
      expect(responseObj).to.be.an("object");
      console.log(arguments);
      console.log(1);

      done();
    });
  });
});
