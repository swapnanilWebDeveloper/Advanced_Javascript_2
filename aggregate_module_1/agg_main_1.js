import { degree,college,Employee_info,Employee_salary,Student } from "./agg_bridge_1.js";

console.log(degree);
console.log(college);

Employee_info("Akshay Kumnar",22,"Akshay@gmail.com","java programmer");
console.log("net salary is = "+Employee_salary(25000,4500,2500,8500,9500));

let stu = new Student("MImosha Saha","Mimosha@gmail.com","Banarjee Lane",47,64,81);

stu.personal_info();
stu.calc_science();

