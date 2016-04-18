var Gigasecond = function(input) {
    startDate = input;
};

Gigasecond.prototype.date = function() {

    var gigasecondVal = 1000000000000;
    var returnedDate = new Date(startDate.getTime() + gigasecondVal);
    return returnedDate;

};

module.exports = Gigasecond;


// var Gigasecond = function(input) {
// //
// // YOUR CODE GOES HERE
// //
//
// var inputtedDate = (input);
//
// console.log(input);
// console.log(inputtedDate);
// var gigasecondVal = 1000000000000;
// var returnedDate = new Date(inputtedDate.getTime() + gigasecondVal);
// console.log(returnedDate);
//
// return returnedDate;
//
// };
//
// module.exports = Gigasecond;
