const sumAll = function (startNum, endNum) {
    let sum = 0;

    if (typeof (startNum) === "number"
        && typeof (endNum) === "number"
        && startNum >= 0
        && endNum >= 0
    ) {
        if (startNum > endNum) {
            const tempNum = startNum;
            startNum = endNum;
            endNum = tempNum;
        }

        for (let i = startNum; i <= endNum; i++) {
            sum += i;
        }
        return sum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
