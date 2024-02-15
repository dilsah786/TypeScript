/*  ----------  Type Assertion or Type Casting   -------------  */

// type one = string;
// type two = number | string;
// type three = 'hello';


// console.log(10);

// let a1:one = "hello";
// let b1 = a1 as two;
// let c1 = a1 as three;


// let d1 = <one> 'world';
// let e1 = <number | string > 'hello world';
// console.log(typeof b1);

// const img = document.querySelector("img")!;
// const img2 = document.getElementById("img")! as HTMLImageElement;


const year = document.getElementById("year") as HTMLSpanElement
const thisYear:string = new Date().getMinutes().toString();
year.setAttribute("datetime",thisYear)
year.textContent = "Minute :  " + thisYear;


 console.log(thisYear);




















































