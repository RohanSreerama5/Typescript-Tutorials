//Enum only exists in TS world not in JS

//make as so: enum {NEW, OLD}

//Automatically enumerated global constant identifiers 

//Now in my person object for role, let's say I want admin privelege, read-only priv, and write-only privelege.
//admin can be 0, read = 1, and write = 2. We set these labels up using enum

//Can use global constants, but an enum makes it easier 
// const ADMIN = 0; //can define global constants 
// const READ_ONLY = 1;
// const AUTHOR  = 2;

enum Role { //This Role now is a custom type we made . So we can access it's attributes like an object 
    ADMIN = 5, //compiler assigns this to 0 and so on
    READ_ONLY,
    AUTHOR
};

//Can even do this:
//enum Role { ADMIN = 'Admin', READ_ONLY = 100, AUTHOR = 200};

const person = {
    name: 'Rohan',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

if (person.role === Role.ADMIN) {
    console.log('is admin');
}