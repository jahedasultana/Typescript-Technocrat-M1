{
//interface

 interface User1 {
    name: string;
    age: number;
  };

  interface User2 extends User1  {
    role : string;
    
  };

  const sumu: User2 = {
    role: "admin",
    name: "sathi",
    age: 27
  };


 //generic type
 type GenericArray<T> = Array<T>

// const rollNumber: number[] = [1,2,3];
const rollNumber: GenericArray<string> = ['1', "2", "3"];


}