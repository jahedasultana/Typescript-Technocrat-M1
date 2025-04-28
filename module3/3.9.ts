{
    // abstraction : 1.interface 2.abstract

    // interface Vehicle1{
    //     name: string;
    //     model: number;
    // }
    // const vehicle1 : Vehicle1 = {
    //     name: "Toyta",
    //     model:100
    // }

    // idea
    interface Vehicle1{
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // real time implementation 
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log(`I am starting the car engin`);
        }

        stopEngine(): void {
            console.log(`I am stoping engine`);
        }
        move(): void {
            console.log(`I am moving car`);
        }
        test(){
            console.log(`i am just testing`);
        }

    };

    const toyotaCar = new Car1();
    toyotaCar.startEngine();


    // abstract class

    // idea
   abstract class Car2 {
      abstract startEngine(): void;

       abstract stopEngine(): void ;
       abstract move(): void ;
        test(){
            console.log(`i am just testing`);
        }
    };

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log(`I am starting the car engin`);
        }

        stopEngine(): void {
            console.log(`I am stoping engine`);
        }
        move(): void {
            console.log(`I am moving car`);
        }
    }

    // const hondaCar = new Car2();
    // hondaCar.startEngine();
}