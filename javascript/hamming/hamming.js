var Hamming = function() {};

Hamming.prototype.compute = function(a, b) {

    var num = 0;
    var i = 0;

    // console.log(a);
    // console.log(b);

    if (a.length !== b.length) {
        throw new Error ("DNA strands must be of equal length.");
    }

    while (i < a.length) {
        if (a.charAt(i) !== b.charAt(i)) {
            num ++;
        }
        i ++;
    }

    return num;

};

module.exports = Hamming;
