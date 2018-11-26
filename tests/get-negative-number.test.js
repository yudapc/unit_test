"use strict";
const chai = require("chai");
const expect = chai.expect;
const operation = require("../lib/get-negative-number");
const getNegativeNumber = operation.getNegativeNumber;
const countNumber = operation.countNumber;
const doubleNumber = operation.doubleNumber;

describe("test get negative number", () => {
  let arr = [];
  beforeEach(() => {
    arr = [1, -2, 0, 3, -4, 5, 7, -10, -11, 14, 15, 16];
  });

  describe(".getNegativeNumber", () => {
    it("should return negative number", () => {
      const expectedNumber = [-2, -4, -10, -11];
      expect(getNegativeNumber(arr)).to.eql(expectedNumber);
    });
  });

  describe(".countNumber", () => {
    describe("Count Negative Number", () => {
      it("should return count negative number", () => {
        const expectedNumber = 4;
        const getNegativeNumbers = () => getNegativeNumber(arr);
        const countListNumber = countNumber(getNegativeNumbers)(arr);
        expect(countListNumber).to.eql(expectedNumber);
      });
    });
    describe("Count Positive Number", () => {
      it("should return count positive number", () => {
        const expectedNumber = 8;
        const getPositiveNumbers = x => arr.filter(s => s >= 0);
        const countListNumber = countNumber(getPositiveNumbers)(arr);
        expect(countListNumber).to.eql(expectedNumber);
      });
    });
  });

  describe(".doubleNumber", () => {
    it("should return list double number", () => {
      const expectedNumber = [2, -4, 0, 6, -8, 10, 14, -20, -22, 28, 30, 32];
      expect(doubleNumber(arr)).to.eql(expectedNumber);
    });
  });
});
