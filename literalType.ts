
//Literal types are types where you don't just say a certain variable or parameter should hold a number or string. 
//Literal types are where you are also very clear about the value it shud hold 

//One example of this is the `const`
//ie: 

const myNum = 42; //If you hover, TS doesn't infer it's a number. The type that is inferred is NOT number, it is 
//42. TS did infer this concrete number as a type here because it is a const (it will never change)
//42 is dervied from the number type, but it's a specific number 

function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') { //I've set this union type with 2 literal types
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2; //here I force the conversion to number if that third parameter is as-number
    }else {
        result = input1.toString() + input2.toString();
    }

    return result; //In the below idea, we are converting the result. In the above idea, we are converting the inputs 
    //before calculations are performed. Both ways are good, depends on ur use case.

    // if (resultConversion === 'as-number') {
    //     return +result; //+ converts to a number type
    // }else {
    //     return result.toString();
    // }

    //Note resultConversion isn't just a string type. We've used a union type concept to assign it literal types.
    //Essentially the argument must be the string as-result or the string as-text. So we use a union type 
    //combined with literal types. Literal types are derived from your core types like string, number, etc., but 
    //then they are specific as to what number or what string it is. resultConversion does not accept 
    //any other string value. Note we could just use an enum too, but this is faster and better. Often
    //you will use union type paired with literal type because you will likely have multiple possible 
    //values for a single argument. Often literal type will be used in the context of a union type 
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges); 

const combinedStringAges = combine('30','26','as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);

//Note:
//resultConversion: 'as-text' //Ex of assigning resultConversion to a literal type
//resultConversion: 'as-text' | 'as-number' //Ex of assigning resultConversion to a union type of literal types 