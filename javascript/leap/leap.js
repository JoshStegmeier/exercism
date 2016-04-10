var Year = function() {};

Year.prototype.isLeap = function(input) {
//
// YOUR CODE GOES HERE
//

    var selectedYear = input;

    if (selectedYear %4 === 0) {
        return true;
    } else if (selectedYear %100 === 0) {
        return false;
    } else if (selectedYear %400 === 0) {
        return true;
    } else {
        return false;
    }

};

module.exports = Year;
