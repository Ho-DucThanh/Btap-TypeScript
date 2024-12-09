"use strict";
function B7(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const check = target - nums[i];
        if (map.has(check)) {
            return [map.get(check), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
console.log(B7([2, 7, 11, 15], 9));
console.log(B7([3, 2, 4], 6));
