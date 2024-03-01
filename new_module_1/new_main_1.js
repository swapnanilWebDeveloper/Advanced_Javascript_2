import {degree, college, software_developer_personal_information as sd_pi, software_developer_salary_calculation 
    as sd_sc, Student } from "./new_library_1.js";
  
  console.log(degree);
  console.log(college);
  
  sd_pi("Suryendu Sarkar",25,"Suryendu@gmail.com","React.js developer");
  console.log("net salary is = "+sd_sc(75000,6500,7500,4500,3500));
  
  let stu = new Student("Mayuk Mukherjee","Mayuk@gmail.com","Barendranagar",99,88,97);
  
  stu.personal_info();
  stu.calc_science();