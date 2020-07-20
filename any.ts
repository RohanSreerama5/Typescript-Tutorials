//Any type is the most flexible type you can assign in TS 

//Means you can store any kind of value 

let favoriteActivities: any[]; //tells TS I have an array of anything. Can also just say any
favoriteActivities = [5, 'Sport'] //If I say `any` above w/0 [] then it won't care if I have an array or not 

let myNum: any;
myNum = [4, 'Rohan', true]

//`Any` makes sure TS compiler can't check anything for type 

//Use `any` if you don't know what type of data is coming in and then you can do run-time checks (if statements using typeof)
//to check what type comes in and decide what to do with it 