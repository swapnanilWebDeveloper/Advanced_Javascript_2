
import {default as yahoo } from "./library_5.js";

import { message, course, user,student} from "./library_5.js";

yahoo(); 
console.log(message);
console.log(course);
user("Salman khan");

let sc_total = student("Sanlap Gadai",19,81,64,71);
console.log("Total marks in science = "+sc_total);

document.body.innerHTML = message;



