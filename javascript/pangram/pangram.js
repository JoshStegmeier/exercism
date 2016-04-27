var Pangram = function(sentence) {
    this.sentence = sentence;
};

Pangram.prototype.isPangram = function() {

// console.log(this.sentence);

    var str = this.sentence.replace(/\s/g, '').toLowerCase();
    console.log(str);

    if (!str) {
        return false;
    } else {
        console.log("there is an input");
    }

    var a = "";

        if (str.length === 0) {
            return false;
        } else {
            for (i=0; i < str.length; i++) {
                if (a.match(str[i])) {
                    continue;
                } else if (str[i].match(/^[a-z]+$/)) {
                    a = a + str[i];
                }
            }
    }

        console.log(a);

        if (a.length === 26) {
            return true;
        } else {
            return false;
        }
};

module.exports = Pangram;
