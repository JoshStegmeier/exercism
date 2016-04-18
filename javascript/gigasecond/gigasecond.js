var Gigasecond = function(input) {
    startDate = input;
};

Gigasecond.prototype.date = function() {
    var gigasecondVal = 1000000000000;
    var returnedDate = new Date(startDate.getTime() + gigasecondVal);
    return returnedDate;
};

module.exports = Gigasecond;
