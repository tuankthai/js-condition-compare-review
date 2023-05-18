const {
    checkNumber,
    checkAge,
    checkLeapYear,
    findLargestNumber,
  } = require("./review-condition.js");
// Exercise 1
describe("checkNumber", () => {
    it("should display 'Positive number' when the number is positive", () => {
      expect(checkNumber(5)).toBe("Positive number");
    });
  
    it("should display 'Negative number' when the number is negative", () => {
      expect(checkNumber(-5)).toBe("Negative number");
    });
  
    it("should display 'Zero' when the number is zero", () => {
      expect(checkNumber(0)).toBe("Zero");
    });
  });
  
  // Exercise 2
  describe("checkAge", () => {
    it("should display 'You are a minor' when the age is less than 18", () => {
      expect(checkAge(15)).toBe("You are a minor");
    });
  
    it("should display 'You are an adult' when the age is 18 or older", () => {
      expect(checkAge(25)).toBe("You are an adult");
    });
  });
  
  // Exercise 3
  describe("checkLeapYear", () => {
    it("should display 'Leap year' for a leap year", () => {
      expect(checkLeapYear(2020)).toBe("Leap year");
    });
  
    it("should display 'Not a leap year' for a non-leap year", () => {
      expect(checkLeapYear(2021)).toBe("Not a leap year");
    });
  });
  
  // Exercise 4
  describe("findLargestNumber", () => {
    it("should display the largest number among the three", () => {
      expect(findLargestNumber(10, 5, 8)).toBe(10);
      expect(findLargestNumber(5, 10, 8)).toBe(10);
      expect(findLargestNumber(8, 5, 10)).toBe(10);
    });
  });
  