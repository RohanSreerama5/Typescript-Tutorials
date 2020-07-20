//Functions

function add(n1: number, n2: number) { //If you hover over func, you can see the signature and the return type of the func
    return n1 + n2;  //TS infers the return type 
}

//WE can also explicitly say what the return type is by adding a colon after the func signature and the type

//Let TS infer the type (best practice)

function printResult(num: number): void { //return type here is `void`
    console.log('Result: ' + num);
} //Note you can also use the `return` keyword here to exit the func. 

printResult(add(5,12)); 
//We can't do console.log(printResult(add(5,12))) because printResult does not return anything. We would 
//just print out `undefined`. But `undefined` is also a type of value in JS
//Undefined is a real value. You would also get this if you access a property on an object that does not exist

//By return, we mean printResult does not return anything back to its caller (func)
//If it does return something you can choose to capture the returned value in a variable 

//Weird thing is `undefined` is a valid type in TS. I can do this: 
//let someValue: undefined;

/*function printResult(num: number): undefined { //return type here is `void`
    console.log('Result: ' + num);
    return;
}

console.log(printResult(add(5,12))); */

//Note above you can make the return type underfined. To use this, you must say `return`. If you 
//print this result out you'll print undefined. 

//Usually when your function doesn't return anything just use `void`. This is not SUPER important 

//NOW WATCH THIS 

let combineValues: Function; //type here rn is `any`
//The Function type is provided by TS. It says this var must store a Function 

combineValues = add; //combineValues stores a pointer to the add function. 

//PROBLEM: 
//Since combinValues is `any` I can do this: 
//combinValues = 5; This would compile in TS just fine 

//NEXT PROBLEM: 
//Even if I set the type to Function, we still have a problem because now I can do this:
//combineValues: printResult; //There's no way to enforce that I want only a func with 2 arguments to 
//go into combineValues. TS will still compile fine if I pass in arguments even tho printResult doesn't support them

//This is where function types come in handy: 
//Function types are types that describe the function regarding the parameters and the return value of that func
console.log(combineValues(8, 8)) //This works! This is normal JS. we can store a pointer to a func in a new variable

//IMPORTANT ---------------------------------------
//Do function types as so: 

let myValue: (a: number, b: number) =>  number; //This says myValue accepts any funciton that takes no parameters and returns a number
//Now we're saying myValue should accept any function that takes 2 parameters where each is a number and the func itself returns a number

myValue = add; 

