import { message,course,user,student,test } from "./library.js";


console.log(message);
console.log(course);
user("Swapnanil Roy");

let sc_total = student("Mayuk Mukherjee",19,99,88,97);
console.log("Total marks is = "+sc_total);

document.body.innerHTML = message;

let obj = new test();

