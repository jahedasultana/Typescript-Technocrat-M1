{// generic constraint with keyof operator

type vehicle = {
    bike: string;
    car: string;
    ship: string;
}

type Owner = "bike" | "car" | "ship";

type Owner2 = keyof vehicle

const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
};

const user = {
    name: "Mr. Zahid",
    age: 26,
    address: "jsr",
};

const car = {
    model: "Toyota 100",
    year:200
};

const result = getPropertyValue(car,"model");


}