var BeerSong = function() {};

    var sentence = "";
    
    function beerCore (x) {
    
        if (x === 2) {
            sentence += x + " bottles of beer on the wall, " + x + " bottles of beer." + "\n" + "Take one down and pass it around, " + (x - 1) + " bottle of beer on the wall." + "\n" ;
        } else if (x === 1) {
            sentence += x + " bottle of beer on the wall, " + x + " bottle of beer." + "\n" + "Take it down and pass it around, " + "no more bottles of beer on the wall." + "\n" ;
        } else if (x === 0) {
            sentence += "No more bottles of beer on the wall, no more bottles of beer." + "\n" + "Go to the store and buy some more, 99 bottles of beer on the wall." + "\n" ;
        } else if (x > 1) {
            sentence += x + " bottles of beer on the wall, " + x + " bottles of beer." + "\n" + "Take one down and pass it around, " + (x - 1) + " bottles of beer on the wall." + "\n" ;
        } 
        
    }

    function beerSing (a, b) {

        sentence = "";
            
        if (isNaN(b)) {
            b = 0;
        } else {
            console.log("b is a defined number!");
        }

        while (a >= b) {
            var i = a;
            console.log (i);
            beerCore(i);
            sentence += "\n";
            var x = i-1;
            a--;
            console.log(a);
        }
        
        sentence = sentence.replace(/\n$/, "");
        return sentence;
    }

BeerSong.prototype.verse = function(input) {

    sentence = "";
    beerCore(input);
    return sentence;

};

BeerSong.prototype.sing = function(a, b) {

    return beerSing(a, b);

};

module.exports = BeerSong;