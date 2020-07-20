console.log('Your code goes here...');

//Core Types 

//TS provides many datatypes to JS. JS itself knows SOME datatypes. BUT TS adds many more types 
//TS also enables you to write your own types 

//`number` type: (in JS and TS)
//There is no special int, double, float, etc. A `number` is just ex. 1, 5.3, -10

//`string` type: (in JS and TS)
//Can be found as so: 'Hi', "Hi", `Hi`
//The backtick option is a modern JS and TS thing which allows us to write template literals, which are
//normal literal strings where you can DYNAMICALLY (lowk during run-time) inject some data into them 

//`boolean` (in JS and TS) 
//   true/false
//JS has this notion of "truthy" and "falsy" values. 
//For ex, 0 in JS is known as a falsy value. If used in an if() it wud be treated as false. 
//The boolean datatype ONLY knows true/false
//Truthy and falsy is not related to datatypes. It's some behind the scenes syntactic sugar JS does 
//at run-time when it sees such conditions

function add(n1: number, n2: number, showResult: boolean, phrase: string) { //add type assignments in TS. If you just leave it (JS style) it will be of type any
    //console.log(typeof number1) //typeof supported by JS 
    if(showResult) {
        console.log(phrase + (n1+n2)); //The first argument here is a string, so the + will tell 
        //JS compiler to convert everything else to a string and concat it. So we need () around n1+n2
    }else {
        return n1 + n2; 
    }
    
}

let exampleNum: number;
exampleNum = 40; //If you don't assign exampleNum to a type it will still work but then this variable 
//can be reassigned to any type 
//ie.
let exNum;
exNum = 9; 
exNum = 'Rohan';
let exampleNumber: number = 10; 
let numberEx = 20; 

//Another ex. 

let myResult = 'Result';
//myResult = 9; TS complains bc it inferred myResult is a string 

const number1 = 5; //const means constant. variable can be made using `let`
const number2 = 2.8; //if you don't plan on changing it later, use const (cannot reassign for const)
const printResult = true; 
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase); //IDE complains here if type is wrong bc VScode has built-in TS support
//If I compile wiht wrong type, TS compiler will throw error. 
//console.log(result)