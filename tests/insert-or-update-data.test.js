"use strict";
const chai = require("chai");
const expect = chai.expect;
const operation = require("../lib/insert-or-update-data");

describe("test library insert or update data", () => {
  describe("when data does not exist", () => {
    it("should insert new data", () => {
      const listData = [];
      const data = { id: 1, name: "Satu" };
      const executeFunction = operation.insertOrUpdate(listData, data);
      const expectedResult = [data];
      expect(executeFunction).to.eqls(expectedResult);
    });
  });
  describe("when data does  exist", () => {
    it("should update new data", () => {
      const listData = [{ id: 1, name: "Satu" }, { id: 2, name: "Dua" }];
      const data = { id: 2, name: "Dua Edited!" };
      const executeFunction = operation.insertOrUpdate(listData, data);
      const expectedResult = [
        { id: 1, name: "Satu" },
        { id: 2, name: "Dua Edited!" }
      ];
      expect(executeFunction).to.eqls(expectedResult);
    });
  });
});
