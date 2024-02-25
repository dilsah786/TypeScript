"use strict";
console.log("index signature");
const todayTrasaction = {
    Pizza: 10,
    Books: 11,
    Job: 20
};
console.log(todayTrasaction.Job);
console.log(todayTrasaction['Books']);
const totalQuantity = (trasaction) => {
    let total = 0;
    for (const val in trasaction) {
        total += trasaction[val];
    }
    return total;
};
console.log(totalQuantity(todayTrasaction));
const student = {
    name: "TypeScript",
    GPA: 4.5,
    classes: [100, 200, 300]
};
console.log(student.name);
for (const val in student) {
    console.log(`${val}  : ` + student[val]);
}
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 300
};
const monthlyIncomes1 = {
    salary: 500,
    bonus: 1000,
    sidehustle: [100, 200, 3000, 4000],
    marks: {
        math: 85,
        science: 55,
        sst: 80,
        hindi: 65,
        english: 76,
        urdu: 79
    }
};
let totalSideHustle = 0;
let totalMarks = 0;
for (const revenue in monthlyIncomes1.marks) {
    totalMarks += monthlyIncomes1.marks[revenue];
}
console.log("totalMarks   " + totalMarks);
monthlyIncomes1.sidehustle.map((e) => totalSideHustle += e);
console.log("totalSideHustle    " + totalSideHustle);
