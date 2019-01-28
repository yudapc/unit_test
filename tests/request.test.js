const expect = require("chai").expect;
const getUser = require("../lib/request").getUser;

describe("Get User tests", () => {
  it("Get a user by username", () => {
    return getUser("yudapc").then(response => {
      expect(typeof response).to.equal("object");

      expect(response.name).to.equal("Yuda Cogati");
      expect(response.html_url).to.equal("https://github.com/yudapc");
      expect(response.location).to.equal("Jakarta");
    });
  });
});
