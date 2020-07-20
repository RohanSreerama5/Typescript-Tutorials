
const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Waterpolo']
};

/*
//Explictly: 

let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Rohan']; //In this explict case, your array must be of only string.
*/
//Note you can have mixed arrays 

let favoriteActivities: any[]; //Use any to store anything in the array 
favoriteActivities = ['Sports', 1];

let myActions: (string | number)[];
myActions = [9, 'String'] //Here I explicitly say my array contains only 2 types: string and number 

for (const hobby of person.hobbies) { //TS infers that hobbies[] is a string[] based on the above person object we set up so it knows hobby is a string. So
    //you can do string methods on hobby like `toUpperCase`
    console.log(hobby.toUpperCase);
} //This goes thru each hobby of hobbies[]

