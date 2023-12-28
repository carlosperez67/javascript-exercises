const removeFromArray = function(arr, ...args) {
    // const newArray = [];

    // arr.forEach(e => {
    // if (!args.includes(e)) {
    //     newArray.push(e);
    //   }
    // });
    // return newArray;

    return arr.filter((val) => !args.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
