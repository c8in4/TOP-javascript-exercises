const fibonacci = function (num) {
    num = +num;
    if (num < 0) return "OOPS";
    let fibSeq = [0, 1];
    for (let i = 0; i < num; i++) {
        fibSeq.unshift(fibSeq[0] + fibSeq[1])
    }
    return fibSeq[0];
};

// Do not edit below this line
module.exports = fibonacci;
