//Creating a non-re-assignable constant
const name = "Tiarra";

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
function exampleTwo(name, message) {
  console.log(name);
  console.log(message);
}

//Calling function with parameters
exampleTwo("Tiarra", "Hello World!");

////////////////////////////////////////////////////////////////////////////////////////

//Defining function with parameters using a return
function exampleThree(name, message) {

  return "I am" + name + ". " + message;
}

//Calling function with parameters using a return
const exampleThree = exampleThree("Tiarra", "Hello World")
console.log(exampleThree);

/////////////////////////////////////////////////////////////////////////////////////////

// Arrow function or anonymous function
export default (name, message) => {
  return name + message;
}

////////////////////////////////////////////////////////////////////////////////////////

//Objects
const user = {
  name: "Tiarra",
  age: 34
};

//prints entire object
console.log(user);

//prints just the name
console.log(user.name);

//////////////////////////////////////////////////////////////////////////////////////////

//Object that contains a method
const userTwo = {
  name: "Tiarra",
  age: 34,
  greet(){
    console.log("Hello world.")
    console.log("this.age")
  }
};

user.greet();

//////////////////////////////////////////////////////////////////////////////////////////

class User {
constructor(name,age){
  this.name = name;
  this.age = age;
}

  greet(){
    console.log("Hi")
  }
}

const user1 = new User("Tiarra", 34);
console.log(user1);
user1.greet();

////////////////////////////////////////////////////////////////////////////////////////////

//Arrays
const hobbies = ["Reading", "Eating", "Gaming"];
console.log(hobbies);
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);

//add to array
hobbies.push("Learning");

//find index of a certain value
const index = hobbies.findIndex((item) => item === "Sports");
console.log(index);

//transforms the array
const editedHobbies = hobbies.map((item) => item + "!");
console.log(editedHobbies);

//Convert to objects
const editedHobbies1 = hobbies.map((item) => ({text: item}));
console.log(editedHobbies1);

/////////////////////////////////////////////////////////////////////////////////////////////

//Nested Arrays
const content = [
  [
    "",
    "",
    ""
  ],
  [
    "",
    "",
    ""
  ],
  [
    "",
    "",
    ""
  ]
]
console.log(content[0[0]]);

/////////////////////////////////////////////////////////////////////////////////////////////////

// Destructuring Arrays

const userNameData = ["Tiarra", "Blandin"]

const firstName = userNameData[0];
const lastName = userNameData [1];

// OR

const [firstName1, lastName1] = ["Tiarra", "Blandin"]

/////////////////////////////////////////////////////////////////////////////////////////////////

//

/////////////////////////////////////////////////////////////////////////////////////////////////

//

/////////////////////////////////////////////////////////////////////////////////////////////////