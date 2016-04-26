var Words = function() {};

Words.prototype.count = function(input) {

    var str = input;
    var res = str.split(" ");

    var initialValue = {};

    var reducer = function(tally, vote) {
        if (!tally[vote]) {
            tally[vote] = 1;
        } else {
                tally[vote] = tally[vote] + 1;
            }
        console.log(tally);
        return tally;
    };

var result = res.reduce(reducer, initialValue);
return result;

};

module.exports = Words;
