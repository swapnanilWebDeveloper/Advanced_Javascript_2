import * as element from "./new_library_3.js";
  
  console.log(element.degree);
  console.log(element.college);
  
  element.Employee_info("Rahul Ghosh",22,"Rahul@gmail.com","junior tester");
  console.log("net salary is = "+element.Employee_salary(35000,6500,7500,8500,9500));
  
  let stu = new element.Student("sukalpa Saha","Sukalpa@gmail.com","Bose lane",67,54,72);
  
  stu.personal_info();
  stu.calc_science();
