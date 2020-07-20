

let userInput: unknown; //WE don't know yet if the user will enter a string, number, IDK

userInput = 5; 
userInput = 'Max'; //Thus far, it works the same as the `any` type 

//unkown is diff from any tho 

let userName: string; 
if (typeof userInput === 'string'){
    userName = userInput; //Now it works because I ensure that userInput is a string and TS understands this 
}
    
    
//Here we get an error because we expect a string but userInput is unknown it's not 
//guaranteed to always be a string. If we set userInput to any it would work ofc .

//With unknown we have to do a run-time check on the type that is stored before assining it to a string userName 

//So unknown is better than `any` because some type checking is still enforced by TS, which pushes you to 
// write run-time checks. If you use `any` no type checking is there any u cud face run-time blocks 

//Use unknown if your not sure what is going to be coming into that variable. If you know more 
//specifically, might also be a good idea to use a union type instead of unknown 

//Specificity: regular type, union type, unknown, any (never is a special type that just panics or crashses the app)
//This ranks specificity of a variable from most to least specific 