
//Managing multiple files with TS 


//import this file in our html file too 

console.log('Sending...');

//Now we want a neat watch mode that looks for changes throughout our project files and compiles if anything changes.

//Do this with tsc --init which takes the entire project folder as your project. Run it only once 

//We are setting a general watch that recompiles every tiem any file changes 

//A tsconfig.json file is created which tells TS to manage the project folder and any subfolers inside it
//It also has a buncha cool compiler options you can turn on 

//Now you can just run tsc. This will compile all .ts files. 
//This idea can be combined with watch mode by running, tsc --watch. 
//Now this enters watch mode for all TS files 

//If I change one file, it will recompile that file 

//Another word: When working with multiple files, you can also import them into each
//other using modules (also in JS)

//Right now we just have 2 files which are imported into our HTML file, not into each other