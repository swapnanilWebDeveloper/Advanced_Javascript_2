export let message = "we are using javascript version ES6";
export let course = "i am persuing skills in javascript";

export function user(name){
      console.log("hey guys "+name+" is using the ES6 version!!");
}

export function student(name,age,phy,chem,math){
      console.log("name is : "+name);
      console.log("age is = "+age);
      console.log("marks in physics = "+phy+", chemistry = "+chem+", mathematics = "+math);
      let total;
      total = phy + chem + math;
      return total;
}

export class test{
    constructor(){
        console.log("Constructor method!!");
    }
}