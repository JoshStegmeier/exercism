var BeerSong = function() {};

BeerSong.prototype.verse = function(input) {

    console.log(input);

    function beer (x) {
        if (x > 1) {
            return x + " bottles of beer on the wall, " + x + " bottles of beer." + "\n" + "Take one down and pass it around, " + (x - 1) + " bottles of beer on the wall." + "\n" ;
        } else if (x === 1) {
            return x + " bottle of beer on the wall, " + x + " bottle of beer." + "\n" + "Take it down and pass it around, " + "no more bottles of beer on the wall." + "\n" ;
        } else if (x === 0) {
            return "No more bottles of beer on the wall, no more bottles of beer." + "\n" + "Go to the store and buy some more, 99 bottles of beer on the wall." + "\n" ;
        }
    }

    console.log(beer(input));
    return beer(input);

};

BeerSong.prototype.sing = function(a, b) {

    console.log(a, b);

    // (8, 6);

    function beer (a, b) {

        var sentence = "";

        if (a && b) {
            while (a >= b) {
                var i = a;
                console.log (i);
                var x = i-1;
                a--;
                console.log(a);
                sentence += i + " bottles of beer on the wall, " + i + " bottles of beer." + "\n" + "Take one down and pass it around, " + x + " bottles of beer on the wall." + "\n" + "\n";
            }
        }
        return sentence;
    }

    console.log(beer(a, b));
    return beer(a, b);

};

module.exports = BeerSong;
