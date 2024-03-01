let degree = "I am persuing B.Sc in physics";
let college = "I am a student of Gurudas College";

function software_developer_personal_information(name,age,email,position){
       console.log("name is : "+name+", age = "+age+", email = "+email+", position : "+position);
}

function software_developer_salary_calculation(basic,HRA,TA,PF,IT){
    let net_salary;
    net_salary = basic + HRA + TA - PF - IT;
    return net_salary;
}

class Student{
      constructor(nm,em,add,phy,chem,math){
            this.name = nm;
            this.email = em;
            this.address = add;
            this.physics = phy;
            this.chemistry  = chem;
            this.mathematics = math;   
      }
      personal_info(){
        console.log("name is : "+this.name+", email is : "+this.email+", address is : "+this.address);
      }
      calc_science(){
        let total;
        total  = this.physics + this.chemistry + this.mathematics;
        console.log("Total marks is = "+total);
      }
}

export{degree, college, software_developer_personal_information, software_developer_salary_calculation,Student}