const expect = chai.expect;

describe("MyFunctions", function () {
  const unshuffledDeck = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  ];
  describe("#buildDeck", function () {
    it("should create a deck of cards with 1-13 repeating 4 times", function () {
      expect(buildDeck()).to.eql(unshuffledDeck);
    });
  });

  // Test the shuffle function. Note need a new array to test rather than point
  // to the original array which mutates with the shuffle.
  describe("#shuffle", function () {
    const newDeck = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    ];
    it("should return an array not equal to unshuffledDeck", function () {
      expect(shuffle(newDeck)).to.not.eql(unshuffledDeck);
    });
  });
});
