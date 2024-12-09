"use strict";
function isPalindrome(s) {
    const convert = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reverse = convert.split("").reverse().join("");
    return convert === reverse;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("raceacar"));
