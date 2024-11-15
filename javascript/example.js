//Creating a non-re-assignable constant
const user = "Tiarra";

//Creating variables
let message = "Hello World!";

////////////////////////////////////////////////////////////////////////////////////////

//Defining function
function example() {
  console.log("hello world!");

  //reassigning a variable
  message = "Hello Colorado!"; 
}

//Calling function
example();

////////////////////////////////////////////////////////////////////////////////////////

//Defining function with parameters
function exampleTwo(user, message) {
  console.log(user);
  console.log(message);
}

//Calling function with parameters
exampleTwo("Tiarra", "Hello World!");

////////////////////////////////////////////////////////////////////////////////////////

//Defining function with parameters using a return
function exampleThree(user, message) {

  return "I am" + user + ". " + message;
}

//Calling function with parameters using a return
const exampleThree = exampleThree("Tiarra", "Hello World")
console.log(exampleThree);

/////////////////////////////////////////////////////////////////////////////////////////