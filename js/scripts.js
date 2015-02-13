var scrabble = function(word) {
  var re=/A|E|I|O|U|L|N|R|S|T+/gi;
  var scrabbleNumbers = word.replace(re, ",1,");
  var numbers = scrabbleNumbers.split(",");
  var score = 0;

  numbers.forEach(function(number) {
    if (number !== "") {
      number = parseInt(number);
      score += number;
    }
  });

  return score;
};
