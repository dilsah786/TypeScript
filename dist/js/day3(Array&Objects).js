"use strict";
let strArray = ["hey", "jet", "get"];
let strNumArr = ['strat', "Les Paul", 5150];
let mixedData = ["Evdg", 2000, true,];
strArray[0] = "dilnawaz";
strArray.push("sahila");
strNumArr[0] = 18564;
strNumArr.unshift("jim");
console.log(strNumArr);
let test = [];
let bands = [];
bands.push("a");
console.log(bands);
let tuple = ['Dil', 42, true];
let array = ['Dil', 15, "true"];
tuple[0] = "hello";
array[0] = "dbedge";
console.log("Hello Objects");
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dil",
    prop2: true,
    prop3: 50
};
console.log(exampleObj.prop1);
let myAlbums1 = {
    name: "Dilnawaz-1",
    active: false,
    albums: [1984, 5145, 'UB548']
};
let myAlbums2 = {
    active: true,
    albums: [1985, 5146, 'UB549']
};
const greet = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toLocaleUpperCase()}!`;
    }
    ;
    return 'Hello [Your Name] ? ';
};
console.log(greet(myAlbums1));
var Grade;
(function (Grade) {
    Grade[Grade["a"] = 1] = "a";
    Grade[Grade["b"] = 2] = "b";
    Grade[Grade["c"] = 3] = "c";
    Grade[Grade["d"] = 500] = "d";
    Grade[Grade["e"] = 501] = "e";
    Grade[Grade["f"] = 502] = "f";
    Grade[Grade["g"] = 503] = "g";
    Grade[Grade["h"] = -1] = "h";
    Grade[Grade["i"] = 0] = "i";
    Grade[Grade["j"] = 1] = "j";
    Grade[Grade["k"] = 2] = "k";
    Grade[Grade["l"] = 3] = "l";
    Grade[Grade["m"] = 4] = "m";
    Grade[Grade["n"] = 5] = "n";
    Grade[Grade["o"] = 6] = "o";
    Grade[Grade["p"] = 7] = "p";
    Grade[Grade["q"] = 8] = "q";
    Grade[Grade["r"] = 9] = "r";
    Grade[Grade["s"] = 10] = "s";
})(Grade || (Grade = {}));
console.log(typeof Grade);
console.log(Grade.h);
let obj1 = {
    userId: 1,
    name: "Object-1",
    age: 20,
    isMarried: false
};
let obj2 = {
    userId: "2",
    name: "Object-2",
    age: 20,
    isMarried: true
};
console.log(obj2.name);
if (obj1.isMarried) {
    console.log("Married");
}
else {
    console.log("Not Married");
}
3;
console.log(typeof obj2.userId);
let literals;
let litName = "Dil";
console.log(litName);
litName = "Sah";
console.log(litName);
