
import * as swp from "./library_fl.js";


console.log(swp.message);
console.log(swp.course);
swp.user("Mark Zukerberg");

let sc_total = swp.student("Aninda Mukherjee",18,88,72,91);
console.log("Total marks is = "+sc_total);

document.body.innerHTML = swp.message;

let obj = new swp.test();

