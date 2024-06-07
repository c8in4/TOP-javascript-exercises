const removeFromArray = function (array, ...nums) {
    nums.forEach((num) => {
        while (array.includes(num)) {
            const index = array.indexOf(num);
            array.splice(index, 1);
        }
    }
    );
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;