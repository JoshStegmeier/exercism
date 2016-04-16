var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(input) {

    input = input.replace(/[CGAT]/g, function (m) {
        return {
            'C': 'G',
            'G': 'C',
            'A': 'U',
            'T': 'A'
        }[m];
    });

    return input;

};

module.exports = DnaTranscriber;
