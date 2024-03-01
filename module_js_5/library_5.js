export default function(){
    console.log("may I have your attention please !!!")
}

let message = "we are learning about javascript import and export";
let course = "i am observing advanced javascript skills..";

function user(name){
     console.log("welcome guys , "+name+" is ready to play !!");
}

function student(name,age,phy,chem,math){
     console.log("name is : "+name);
     console.log("age is = "+age);
     console.log("marks in physics = "+phy+", chemistry = "+chem+", mathematics = "+math);
     let total;
     total = phy + chem + math;
     return total;
}


export{ message, course, user,student};