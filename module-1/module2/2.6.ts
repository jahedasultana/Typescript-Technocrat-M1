{
    //Constraints in typescript
     
    const addCourseToStudent = <T extends {id: number; name: string; email: string}>(student : T) => {
    const course = "Next Level Web Development"
    
    return {
        ...student,
        course
    }
}
      const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({ id:123, name: "sathi",email: "sathi@gmail.com",devType: "NLWD"});

      const student2 = addCourseToStudent({id: 234, name:"sumu", email:"sumu@gmail.com",hasWatch:"Apple Watch"});
    }
