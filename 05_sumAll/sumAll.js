const sumAll = function(x, y) {
    if ((!Number.isInteger(x) || !Number.isInteger(y)) || x < 0 || y < 0) {
        return 'ERROR';
    }
    const max = Math.max(x,y);
    const min = Math.min(x,y);
    let sum = 0;

    for (let index = min; index <= max; index++) {
        sum += index;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
