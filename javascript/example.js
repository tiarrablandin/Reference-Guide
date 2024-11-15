//Creating a non-re-assignable constant
const user = "Tiarra";

//Creating variables
let message = "Hello World!";

//Defining function
function example() {
  console.log("hello world!");

  //reassigning a variable
  message = "Hello Colorado!"; 
}

//Calling function
example();

//Defining function with parameters
function exampleTwo(user, message) {
  console.log(user);
  console.log(message);
}

//Calling function with parameters
example("Tiarra", "Hello USA!");