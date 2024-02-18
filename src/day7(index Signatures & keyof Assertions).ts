//--------------- Index Signatures & keyof Assertions ------------------------

 console.log("index signature");

// interface TrasactionObj {
//     Pizza:strOrNum,
//     Books:strOrNum,
//     Job:strOrNum
// }

interface TrasactionObj {
    [index:string]:number;
}

const todayTrasaction : TrasactionObj = {
    Pizza:10,
    Books:11,
    Job:20
}

console.log(todayTrasaction.Job);
console.log(todayTrasaction['Books']);

const totalQuantity = (trasaction:TrasactionObj):number=>{
   let total = 0;
   for(const val in trasaction){
    total+=trasaction[val]
   }
   return total;
}

console.log(totalQuantity(todayTrasaction));


/* ------------------------------------- */

interface Student {
    [index:string]:string|number|number[]|undefined
    name:string,
    GPA:number,
    classes?:number[]
}

const student:Student = {
    name:"TypeScript",
    GPA:4.5,
    classes:[100,200,300]
}

console.log(student.name)

// for(const val in student){
//     console.log( `${val}  : `+ student[val as keyof Student]);
// }

for(const val in student){
    console.log( `${val}  : `+ student[val]);
}

type Streams = 'salary' | 'bonus' | 'sidehustle';

type Incomes = Record<Streams,number>

const monthlyIncomes:Incomes = {
    salary:500,
    bonus:100,
    sidehustle:300
}

const monthlyIncomes1 = {
    salary:500,
    bonus:1000,
    sidehustle:[100,200,3000,4000],
    marks:{
        math:85,
        science:55,
        sst:80,
        hindi:65,
        english:76,
        urdu:79
    }
}

  
   let totalSideHustle =0;
   let totalMarks = 0;
for(const revenue in monthlyIncomes1.marks){
       totalMarks += monthlyIncomes1.marks[revenue as keyof typeof monthlyIncomes1.marks]
}
console.log("totalMarks   "   + totalMarks);
monthlyIncomes1.sidehustle.map((e)=>
 totalSideHustle+=e
)

console.log("totalSideHustle    "+ totalSideHustle);



