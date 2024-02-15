console.log("functions        "   ,"    line - 1");

const add = (a:number,b:number):number=>{
    return a+b
}

console.log(add(5,10)+"        line - 7");


const meassage = (meassage:any):any=>{
    return `Hello this function in TypeScript Language with ${meassage} `
}

console.log(meassage("Love   "+ "            line - 14"));

// optional parameters

const sumAll = (a:number, b:number, c? :number):number =>{
    if(c!==undefined){
    return a + b + c;
    }else{
        return a+b;
    }
}

console.log(sumAll(2,3));

// default parameters

const addAll = (a:number,b:number,c:number=10):number=>{
   return a+b+c;
}

console.log(addAll(2,5));
console.log(addAll(2,6,0));

// Rest Operators 

const restFunc = (...nums:number[]):number=>{
    return  nums.reduce((prev,next)=>{
        return prev+next;
    })
}

console.log(restFunc(1,2,3,4));


const restFunc2 = (mul:number,...nums:number[]):number=>{
     return mul * nums.reduce((prev,next)=>prev+next);
}


console.log(restFunc2(5,10,5,6));