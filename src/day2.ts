
let a = 12;
let b = 6;
let c = 2;

console.log(a/b);
console.log(c*a);

let myName = "Hello Dilnawaz ";

myName = "CHanging the value of My name from Dilnawaz to this";

console.log(myName);

let str:string | number = "hello"    // union type
let count :number = 50 ;
let ans:boolean;
let final_Output :any;



if(count <= 60){
   ans = true;
   final_Output = 10
}else{
    ans = false;
    final_Output = "Hello Dilnawaz Its final"
}
console.log(ans);

console.log(final_Output);

const sum = (a:number,b:string):string=>{
    return a+b;
}

console.log(sum(20,"50"));
console.log(str);


let  postId :string|number = 20;
let isActive :number|boolean = true;

let re:RegExp = /\w+/g;
