{
    // oop - Inheritance
class Parent {
    name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string){
         this.name = name;
         this.age = age;
         this.address = address;   
        };
        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);

        }
}


    class Student extends Parent {
       

        constructor(name: string, age: number, address: string){
           super(name,age,address)
        };
       
    }

    const student1 = new Student("sathi",27,"Uganda");
    student1.address
    
    
    class Teacher extends Parent {
   
        designation: string

        constructor(name: string, age: number, address: string, designation: string){
        super(name,age,address) 
         this.designation = designation  
        };
      
        takeClass(numOfClass: number) {
            console.log(`${this.name} will sleep for ${numOfClass}`);

        }
    }

    const teacher = new Teacher("sathi2",57,"Uganda","professor");
    teacher.address
    // 
}