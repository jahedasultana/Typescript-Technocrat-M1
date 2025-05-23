{
  const person: number[] = [1, 2, 3, 4];

  type Name = {
    name: string;
  };

  type Age = {
    age: number;
  };

  type Person = Name & Age;

  const name1: Name = { name: "sathi" };
  const name2: Person = { name: "sathi", age: 27 };

  // union type

  type FrontendDeveloper = "fakibazDevloper" | "juniorDeveloper";

  const des: FrontendDeveloper = "fakibazDevloper";

  type School = number | string;

  const sch: School = "gv School";

  //  interface

  interface User1 {
    name: string;
    age: number;
  }

  const user: User1 = {
    name: "sathi",
    age: 27,
  };
}
