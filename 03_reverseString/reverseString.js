const reverseString = function(word) {
    let reversedWord = '';
    word.split('').forEach(letter => {
        reversedWord = letter + reversedWord;
    })
    return reversedWord;
};

console.log(reverseString('hello'));
// Do not edit below this line
module.exports = reverseString;
