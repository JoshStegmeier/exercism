var Words = function() {};

Words.prototype.count = function(input) {

    var str = input.toLowerCase();
    str = str.replace('\t', ' ');
    str = str.replace('\n', ' ');
    str = str.replace('  ', ' ');
    str = str.trim();
    console.log(str);
    var res = str.split(" ");
    console.log(res);

    var initialValue = {};

    var reducer = function(tally, vote) {
        if (!tally[vote]) {
            tally[vote] = 1;
        } else {
                tally[vote] = tally[vote] + 1;
            }
        // console.log(tally);
        return tally;
    };

var result = res.reduce(reducer, initialValue);
return result;

};

module.exports = Words;
