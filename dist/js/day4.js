"use strict";
console.log("functions        ", "    line - 1");
const add = (a, b) => {
    return a + b;
};
console.log(add(5, 10) + "        line - 7");
const meassage = (meassage) => {
    return `Hello this function in TypeScript Language with ${meassage} `;
};
console.log(meassage("Love   " + "            line - 14"));
const sumAll = (a, b, c) => {
    if (c !== undefined) {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
console.log(sumAll(2, 3));
const addAll = (a, b, c = 10) => {
    return a + b + c;
};
console.log(addAll(2, 5));
console.log(addAll(2, 6, 0));
const restFunc = (...nums) => {
    return nums.reduce((prev, next) => {
        return prev + next;
    });
};
console.log(restFunc(1, 2, 3, 4));
const restFunc2 = (mul, ...nums) => {
    return mul * nums.reduce((prev, next) => prev + next);
};
console.log(restFunc2(5, 10, 5, 6));
