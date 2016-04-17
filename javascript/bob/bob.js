//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

    function upperCase (a) {
        return (a === a.toUpperCase());
    }

    function nonWhitespace (a) {
        return (/\S/g.test(a));
    }

    function blank (a) {
        if (nonWhitespace (a) === false) {
            return (true);
        }
    }

    function hasLetters (a) {
        return (/[a-z]/i.test(a));
    }

    function question (a) {
        return (a.substr(-1) === "?");
    }

    var w = upperCase(input);
    var x = nonWhitespace(input);
    var x1 = blank(input);
    var y = hasLetters(input);
    var z = question(input);

    // var upperCase = (a === a.toUpperCase());
    // var nonWhitespace = (/\S/g.test(a));
    // var hasLetters = (/[a-z]/i.test(a));
    // var question = (a.substr(-1) === "?");

    if (w && y) {
        return "Whoa, chill out!";
    } else if (z) {
        return "Sure.";
    } else if (x1) {
        return "Fine. Be that way!";
    } else {
        return "Whatever.";
    }

};

module.exports = Bob;
