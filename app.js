"use strict";
//Configuring the TS compiler 
//Watch mode: tells TS to watch a file and whenever that file changes, TS recompiles. Recompile occurs
//only after you hit save 
//Do this by running: tsc app.ts --watch  or tsc app.ts -w
var userName = 'Maximilian';
console.log(userName);
//Now another problem is when we compile we have to point it to our app.ts file. In big projects, 
//we can have multiple files. What if we have an analytics.ts file too? 
