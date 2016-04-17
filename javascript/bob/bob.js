//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

function isUpperCase (a) {
    return (a === a.toUpperCase());
}

function isBlankSpace (a) {
    if (/\S/g.test(a) === false) {
        return (true);
    }
}

function isALetter (a) {
    return (/[a-z]/i.test(a));
}

function isAQuestion (a) {
    return (a.substr(-1) === "?");
}

Bob.prototype.hey = function(input) {

    var yelling = isUpperCase(input);
    var taylorSwift = isBlankSpace(input);
    var oneLetterOrMore = isALetter(input);
    var aQuestion = isAQuestion(input);

    if (yelling && oneLetterOrMore) {
        return "Whoa, chill out!";
    } else if (aQuestion) {
        return "Sure.";
    } else if (taylorSwift) {
        return "Fine. Be that way!";
    } else {
        return "Whatever.";
    }

};

module.exports = Bob;
