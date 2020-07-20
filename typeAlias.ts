//Type alias

//Now when working with union types, it can be cumbersome to always rewrite some long union type.
//Might consider using type alias

//Create a new type that stores this union type 

type Combinable = number | string; 
type Mine = 'as-number' | 'as-text'; //we can even store literal types in a type alias setup

function combine(input1: Combinable, input2: Combinable, resultConversion: Mine) { 
let result;
if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2; 
}else {
    result = input1.toString() + input2.toString();
}

return result;
}

let result = combine(30, 26, 'as-number');

console.log(result);
