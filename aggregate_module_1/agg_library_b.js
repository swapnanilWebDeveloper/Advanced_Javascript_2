function Employee_info(name,age,email,position){
    console.log("name is : "+name+", age = "+age+", email = "+email+", position : "+position);
}

function Employee_salary(basic,HRA,TA,PF,IT){
 let net_salary;
 net_salary = basic + HRA + TA - PF - IT;
 return net_salary;
}

export{Employee_info,Employee_salary}