var Gigasecond = function(input) {
//
// YOUR CODE GOES HERE
//

var inputtedDate = (input);

console.log(input);
console.log(inputtedDate);
var gigasecondVal = 1000000000000;
var returnedDate = new Date(inputtedDate.getTime() + gigasecondVal);
console.log(returnedDate);
return returnedDate;




};

module.exports = Gigasecond;
