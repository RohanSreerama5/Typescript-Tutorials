//Union Type 

function combine(input1: number | string, input2: number | string) {
    let result; 
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2; //W/o this run-time check, TS complains it might not be able to combine the types so we add this run-time check
    }else {
        result = input1.toString() + input2.toString() //Makes clear to TS here we are combing strings and above only numbers
    }
    
    return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames)

//So Union types can be used to be more flexible regarding what inputs we take into a function 

//Run-time checks are not always neccesary, might run into a example where you don't need it 