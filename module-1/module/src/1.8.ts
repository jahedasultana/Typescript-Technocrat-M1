{// destructuring

const user = {
    id: 345,
    name: {
        firstName: "Jahida",
        middleName: "Sultana",
        lastName: "Sathi",
    },
    contactNo:"0170000000",
    address:"Uganda",
};

const {
    contactNo,
name: {middleName} , 
    
} = user;


// array destructuring

const myFriends = ['monuka','ross','tusu','yeasin'
];

const [, , bestFriend, ...rest] = myFriends;

}