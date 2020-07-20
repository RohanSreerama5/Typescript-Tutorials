

//Function callback concept 

//Here in this function, we expect the last argument to be a function that accepts 1 number as its parameter
//and returns nothing. 

//Essentially I want to get a callback function: a function which is passed as an argument which should do something
//with the result 

//So we say addAndHandle expects 3 arguments, the last one being a callback funciton 

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) { //Here's our callback function type
    const result = n1 + n2; 
    cb(result); //This calls into that callback function that was passed in.
    //So now the callback function will execute, with its arugment being result 
}

//Here in our call, we are passing in an anonymous function that simply prints out wh
addAndHandle(10, 20, (myNum) => { //This is the callbcack function we are passing in 
    console.log(myNum);

    //return result; //Here I return result back. But in the function type it's void. This is NOT a bug.
    //You can do this. It just means above that we are going to ignore whatever the func returns 
}) //Here this is not a function type. We are passing a concrete value we're passing in for the cb argument 

//The call above means that we are getting back a number (result) and we are goign to do something with it (that is, print it)

//Note: 
// () => {} means anonymous function. Inside the () we have what the function receives as it's arugment 
//and inside the {} is the function implementation. 
//So `result` from line 13 is passed as the argument to the anonymous funciton on line 18  

// cb: () => void for ex is defining a function type 

//So addAndHandle took our arugments 10 and 20 and combined them into 30 and stored them
//in result in addAndHandle Func. Then the callback func is called with the arugment result. The callback
//must meet the condition specified in the third argument to addAndHandle. 

//Then the callback implementation is invoked on line 19 and the result gets printed out. 

//By defining the function type on line 11, TS can infer in our anonymous function what the type for 
//myNum is and we can use any number functions on it. 
