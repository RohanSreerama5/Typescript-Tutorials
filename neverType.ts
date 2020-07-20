

//Remember the void type? Never is another type functions can return 
//Note: {} means object. Our generateError funciton throws Error objects 

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}; 
}

generateError('An error occured!', 500); //Although generateError's return type is void, if I console.log this 
//undefined does not get printed out because since an error is thrown, our script essentially crashes 
//This function never returns a value. It always cancels (crashes) the script. 

//Therefore, our return type here is never because generateError never returns anything, not even undefined.
//If we hover, it says void because never type wasn't originally built into TS. 

//Our function is not just void but also never 

//When we say crash we mean, the function never returns to its caller (or goes back up the call stack), it just halts there and exits

//For this type of crashing function, it is useful to explicitly write `never` because it makes 
//it clear this func is not intended to return ANYTHING, and this func will basically crash or break your script 
//Note void is still safe because a function can still be able to return up the call stack, unlike the never type

//Basically use never when you want to panic your application. Note you can wrap this in a try catch block 