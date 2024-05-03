
const repeatString = function(strings, times) {
    const stringBefore = strings;
    if (times === 0) {
        return '';
    }
     if (times < 0) {
         return 'ERROR';
     }
    for (let i = 1; i < times; i++) {
      
        strings += stringBefore;

    }
    return strings;
};

// Do not edit below this line
module.exports = repeatString;
