const reverseString = function(str) {
    let len = str.length;
    let res = '';
    for (let i=len; i>0; i--) {
        res += str.slice(i-1,i);
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
