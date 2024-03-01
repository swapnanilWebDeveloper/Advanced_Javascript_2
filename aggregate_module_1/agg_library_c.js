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

export{Student}