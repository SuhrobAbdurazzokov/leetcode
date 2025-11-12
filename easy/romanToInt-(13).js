/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let res = 0;
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    for (let i = 0; i < s.length - 1; i++) {
        if (roman[s[i]] < roman[s[i + 1]]) {
            res -= roman[s[i]]; // IX => roman['I'] (1) < roman['X'] (10)
        } else {
            res += roman[s[i]]; // res = 0 - 1 = -1
        }
    }
    // res = -1 + roman['X']
    // res = -1 + 10 = 9
    return res + roman[s[s.length - 1]];
};
