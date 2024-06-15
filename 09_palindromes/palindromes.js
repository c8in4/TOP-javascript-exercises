const palindromes = function (str) {
    const newStr = str.replaceAll(/\W/g, "").toLowerCase();
    const reversedStr = newStr.split("").reverse().join("");
    return (newStr == reversedStr) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
