{
    // utility types
    // Pick

    type PerSon = {
        name: string;
        age: number;
        email: string;
        contactNo: string; 
    };

    type NameAge = Pick<PerSon, "name" | "age">

    // Omit
     type ContactInfo = Omit<PerSon, "name" | "age">

    //  Required 
    type PersonRequired = Required<PerSon>

    // Partial
    type PerSonPartial = Partial<PerSon>


    // Readonly 
    type PersonReadonly = Readonly<PerSon>

    const person1: PersonReadonly = {

        name: "Mr. XY",
        age: 200,
        contactNo: "0174444499",

    };
    person1.name="Mr.YZ"

    // Record
    type MyObj = Record<string,number>

    const EmptyObj : Record<string,unknown>  = {}

    const obj1: MyObj = {
        a: "aa",
        b: "bb",
        c: "cc",
        d: 6
    }
}