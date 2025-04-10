{
    //generic type
    
    type GenericArray<T> = Array<T>

    // const rollNumber: number[] = [1,2,3];
    const rollNumber: GenericArray<number> = [1, 2, 3];

    // const mentors: string[] = ["Mr.x", "Mr.y", "Mr.z"];
    const mentors: GenericArray<string> = ["Mr.x", "Mr.y", "Mr.z"];

    // const boolArray: boolean[] = [true, false, true];
    const boolArray: GenericArray<boolean> = [true, false, true];

    const user: GenericArray<{name: string; age: number}> = [
      {
        name: "sathi",
        age: 27,

      },
      {
        name: "Tusu",
        age:23
      },

    ];


    const add = (x: number , y: number) => x+y

    add(23,23)

    // generic tuple

    type GenericTuple<X,Y> = [X, Y];

    const manush : GenericTuple<string,string> = ["Mr.x", "Mr.y"];

    const UserWithID : GenericTuple<number, {name:string,email: string}> = [1234, {name: "sathi", email: "a@gamil.com"}];
}