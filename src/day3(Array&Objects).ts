let strArray = ["hey","jet","get"];

let strNumArr  = ['strat',"Les Paul",5150];

let mixedData = ["Evdg",2000,true,];

strArray[0] = "dilnawaz"
strArray.push("sahila")

strNumArr[0] = 18564
strNumArr.unshift("jim")

console.log(strNumArr);

let test = []

let bands :string[] = []

bands.push("a")

console.log(bands);


let tuple :[string,number,boolean]  =['Dil',42,true];


let array :(string|number|boolean)[]  = ['Dil',15,"true"];

tuple[0] = "hello"

array[0] = "dbedge"


//  --------------------  OBJECTS  ---------------------  //

console.log("Hello Objects");
let myObj :object;

myObj = [];

console.log(typeof myObj);

myObj = bands;
myObj = {};

const exampleObj = {
    prop1:"Dil",        // string
    prop2:true,        // boolean
    prop3:50          // number
}


console.log(exampleObj.prop1);

// Using type instead of inteface

type Guitarist = {
    name?:string,
    active?:boolean,
    albums:(string | number)[]
}

// Using interface instead of type
interface Guitarist1  {
    name:string,
    active?:boolean,
    albums:(string | number)[]
}

let myAlbums1:Guitarist = {
    name:"Dilnawaz-1",
    active:false,
    albums:[1984,5145,'UB548']
}

let myAlbums2:Guitarist = {
    active:true,
    albums:[1985,5146,'UB549']
}


const greet = (guitarist:Guitarist):string=>{
    if(guitarist.name){
    return `Hello ${guitarist.name.toLocaleUpperCase()}!`
    };
    return 'Hello [Your Name] ? '
};


console.log(greet(myAlbums1));



enum Grade {   // enum :- when we declare variable with enum then the next value will increase with +1
   a = 1,
   b,
   c,
   d =500,
   e,
   f,
   g,
   h = -1,
   i,
   j,
   k,
   l,
   m,
   n,
   o,
   p,
   q,
   r,
   s
}


console.log(typeof Grade);
console.log(Grade.h);


//       type Aliases 

type strOrNum = string | number

type objectType  = {
    userId : strOrNum
    name :string,
    age:number,
    isMarried :number
}

let obj1 = {
    userId:1,
    name:"Object-1",
    age:20,
    isMarried:false
}

let obj2 = {
    userId:"2",
    name:"Object-2",
    age:20,
    isMarried:true
}

console.log(obj2.name);

if(obj1.isMarried){
   console.log("Married");
}else{
    console.log("Not Married");
}3
console.log(typeof obj2.userId);


// Literals Type 

let literals :"DIl"

let litName :strOrNum = "Dil";

console.log(litName);
 litName = "Sah"

console.log(litName);

