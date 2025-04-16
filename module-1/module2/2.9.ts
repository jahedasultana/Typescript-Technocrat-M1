{
    // condition type

    type a1 = number;
    type b1 = string;

    type x = a1 extends null ? true : false;  //condition type
     
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string
    }

// keyof sheikh "bike" | "car" | "ship"

// car aase kina / bike aase kina / ship ase kina / tractor ase kina

type CheckVehicle<T> = T extends keyof Sheikh ? true : false

type HasPlane = CheckVehicle<"plane">


    // 
}