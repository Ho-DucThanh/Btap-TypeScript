"use strict";
function B4(s) {
    const set = new Set();
    for (let i = 0; i < s.length; i++) {
        set.add(s[i]);
    }
    return Array.from(set).join("");
}
console.log(B4("banana"));
console.log(B4("hello world"));
