const person: { //WE are doing this here explictly because type inference is being useless cuz we want to explicitly tell what shape of data we want for role
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string]; //This marks a tuple type
    //Tuple is a special construct TS understands 
    //Tells TS I want to have a special array with exactly 2 elements and the first shud be a number and the second a string
} = {
    name: 'Rohan',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'] //This tuple must always have exactly 2 elements of this type shape
    //If you hover over role you see (string | number)[]. TS understands we have an array that either holds string or numbers
    //Called a union type (dive in later)
};

person.role.push('admin'); //This doesn't really make sense because we know we only want 2 elemeents for role but TS does not know
//person.role[1] = 10; //This is the same idea. We are changing the second element to a number and 
//TS doesn't really care because it thinks role can be a string OR number array
//The line above won't work once I explicitly tell role is a tuple type. 

//We know we want `role` to have a set structure with 1st element number and second element string 
//For this scenario a tuple is perfect 

console.log(person.role)

//Can also reassign as so: 
//person.role = [0, 'user'] //Can't add random appendages on here 

//The funny thing is that the .push() feature is an exception in tuples. Even tho they are said 
//to be fixed in length, you can use push to append a tuple. Its the exception. 