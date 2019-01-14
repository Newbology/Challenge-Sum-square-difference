/*  SumOfASquare(naturalNumbers)
 *
 *  @param naturalNumbers        1...naturalNumbers to square and add
 *  @method sumOfSquares()       returns ths sum of all 'naturalNumbers' squared
 *  @method squareOfTheSums()    returns the square of all 'naturalNumbers'
 */
exports.SumOfASquare = SumOfASquare;

function SumOfASquare(naturalNumbers) {
  this.naturalNumbers = naturalNumbers;
}

SumOfASquare.prototype.sumOfSquares = function() {
  let sumSquared = 0;

  for (let i = 0; i <= this.naturalNumbers; i++) {
    let square = Math.pow(i, 2);
    sumSquared += square;
  }
  return sumSquared;
};
SumOfASquare.prototype.squareOfTheSums = function() {
  let sum = 0;
  for (let i = 0; i <= this.naturalNumbers; i++) {
    sum += i;
  }
  return Math.pow(sum, 2);
};
// do work here

// overwrite the object prototype, or add methods to the prototype
// to satisfy the two method calls, sumOfSquares() and squareOfTheSums()
