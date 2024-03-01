export default function(name){
    console.log("may I have your attention please !!!")
    console.log("I am "+name);
}

let degree = "I am persuing B.Tech in CSE";
let college = "I am a student of M.I.T";

function Employee_info(name,age,email,position){
       console.log("name is : "+name+", age = "+age+", email = "+email+", position : "+position);
}

function Employee_salary(basic,HRA,TA,PF,IT){
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

export{degree, college, Employee_info, Employee_salary,Student}