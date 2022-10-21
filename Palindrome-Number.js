/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = x.toString()
    let rev = num.split("").reverse().join("")
    return(x==rev)
};
