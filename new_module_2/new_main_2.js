import {degree, college, software_developer_personal_information as sd_pi, software_developer_salary_calculation 
    as sd_sc, Student } from "./new_library_2.js";
  
  console.log(degree);
  console.log(college);
  
  sd_pi("Sanlap Gadai",25,"Sanlap@gmail.com","database developer");
  console.log("net salary is = "+sd_sc(55000,6500,7500,8500,9500));
  
  let stu = new Student("Souvik Chatterjee","Souvik@gmail.com","Biswas Para",87,74,82);
  
  stu.personal_info();
  stu.calc_science();