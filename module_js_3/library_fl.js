let message = "we are learning about javascript import and export";
let course = "i am persuing skills in javascript";

function user(name){
     console.log("hey guys "+name+" is here with us !!");
}

function student(name,age,phy,chem,math){
     console.log("name is : "+name);
     console.log("age is = "+age);
     console.log("marks in physics = "+phy+", chemistry = "+chem+", mathematics = "+math);
     let total;
     total = phy + chem + math;
     return total;
}

class test{
   constructor(){
       console.log("Constructor method has been invoked implicitly");
   }
}

export{ message, course, user,student ,test};