"use strict";
function B8(s) {
    const stack = [];
    const map = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    for (const char of s) {
        if (char in map) {
            const topElement = stack.length > 0 ? stack.pop() : "#";
            if (topElement !== map[char]) {
                return false;
            }
        }
        else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}
console.log(B8("({})[{}]"));
console.log(B8("([)]"));
