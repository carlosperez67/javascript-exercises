const leapYears = function(year) {

    return divFour(year) && (!divHundred(year) || divFourHundred(year));
};

const divFour = function(year) {
    return year%4 == 0;
}
const divHundred = function(year) {
    return year%100 == 0;
}
const divFourHundred = function(year) {
    return year%400 == 0;
}

// Do not edit below this line
module.exports = leapYears;
