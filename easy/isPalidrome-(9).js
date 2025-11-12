/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    const y = String(x).split("").reverse().join("");

    if (Number(y) === x) return true
    return false
};