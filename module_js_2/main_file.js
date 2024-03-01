import { message,course,user as us,student,test } from "./library_file.js";


console.log(message);
console.log(course);
us("Thapa technical");

let sc_total = student("Suryendu Sarkar",18,93,84,88);
console.log("Total marks is = "+sc_total);

document.body.innerHTML = message;

let obj = new test();

