{
    // Type Alias

    type Student =  {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
       

    }

    const student1: Student = {
        name: "mezba",
        age: 50,
        gender: "male",
        contactNo: "017000000",
        address: "ctg",

    };

    const student2: Student = {
        name: "Mir",
        age: 40,
        gender: "male",
        address: "dhk",
    };
    const student3: Student = {
        name: "Mir",
        age: 60,
        gender: "male",
        address: "dhk",
    };


    type UserName = string;
    type IsAdmin = boolean;
    const userName: UserName = "sumu";
    const isAdmin: IsAdmin = true;

    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2;
}