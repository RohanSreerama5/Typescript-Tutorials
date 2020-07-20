
//Object type: 

//Best practice: 
/*const person = { //If you hover over person, you see the Object type for person. It has 2 attributes name of string and age of number
    name: 'Maximilian', //TS infers the type. Because of that, you can't call on fields that don't exist
    age: 30 
}; 

console.log(person.nickname)*/

//I can also do: 
/*
const person: object = {  //I've explictly assigned person to be of type generic Object 
    name: 'Rohan',
    age: 20
};

//Here we've just told TS person is a generic object. TS won't then register the atrributes to person
so you can't do person.name or person.nickname or anything 

//object is one of the built-in types just like number and string
//Still TS analyzes the code and calls out for accessing non-existant nickname field

*/

//Not Best practice: Just let TS infer types

const person: {  //lines 29-32 is NOT making some JS object. {} here does not make an object.
//This just TS's special notation to give info about an Object type
    name: string, //These lines define our specialized object type IMPORTANT
    age: number //This type assignment is only valid in TS, stripped out in JS 
} = {  //I've explictly assigned person to be of type generic Object 
    name: 'Rohan',
    age: 20
};  //using {} instead of `object` to define an object is a TS thing. We are defining a specialized object
//JS will strip this away. {} is for defining a specialized object type where we provide info about 
//the structure of the object (what types variables and types it contains)
//By giving it just {} we are saying its an object. WE put stuff into {...} to tell stuff about the object 
//{} is TS's notation for a specialized object type. So {} does not actually create a new JS object since it gets stripped 
//out from the compiled JS code 
