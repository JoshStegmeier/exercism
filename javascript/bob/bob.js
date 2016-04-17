//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

    var a = input;

    var notBlank = new RegExp(/\S/g);
    var notBlankTest = notBlank.test(a);

    var hasLetters= new RegExp(/[a-z]/i);
    var hasLettersTest = hasLetters.test(a);

    if (a === a.toUpperCase() && hasLettersTest === true) {
        return "Whoa, chill out!";
    } else if (a.substr(-1) === "?") {
        return "Sure.";
    } else if (/\S/g.test(a) === false) {
        return "Fine. Be that way!";
    } else {
        return "Whatever.";
    }

    // var b = a.match("\\?", "g");
    // var c = a.match(/\S/g);
    //
    //     if ( b === true ) {
    //         return "Sure.";
    //     } else if (a === a.toUpperCase()) {
    //         return "Whoa, chill out!";
    //     } else if (c === true) {
    //         return "Fine. Be that way!";
    //     } else {
    //         return "Whatever.";
    //     }

};

module.exports = Bob;
