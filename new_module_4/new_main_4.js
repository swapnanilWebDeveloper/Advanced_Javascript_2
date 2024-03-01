import {default as yahoo } from "./new_library_4.js";

import {degree, college, Employee_info, Employee_salary,Student} from "./new_library_4.js";
  
  yahoo("Eminem");
  console.log(degree);
  console.log(college);
  
  Employee_info("Rahul Ghosh",22,"Rahul@gmail.com","junior tester");
  console.log("net salary is = "+Employee_salary(35000,6500,7500,8500,9500));
  
  let stu = new Student("sukalpa Saha","Sukalpa@gmail.com","Bose lane",67,54,72);
  
  stu.personal_info();
  stu.calc_science();
