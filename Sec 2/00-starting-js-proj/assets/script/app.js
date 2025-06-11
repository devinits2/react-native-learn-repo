// import { apiKey, abc } from './util.js';
// import { apiKey, abc as content } from './util.js';
// import * as util from './util.js';
/////////////////////////

// console.log(util.apiKey);
// console.log(util.abc);

/////////////////////////

// let userMessage = "Hello World";
// console.log(userMessage);


/////////////////////////

// const userMessage = "Hello World";
// console.log(userMessage);


/////////////////////////

// function greet() {
//   console.log("Hello World");
// }
// greet();

/////////////////////////

// function greetUser(userName, message) {

//   console.log(userName);
//   console.log(message);

//   return "hi, I am " + userName + "." + message;
// }

// greetUser("Max", "Hello World");
// greetUser("Manuel", "Whats'up?");

/////////////////////////
// Arrow Functions

// () => {
//   console.log("Hello World");
// }

/////////////////////////

// const user = {
//     name: "Max",
//     age: 30,
//     greet() {
//         console.log("Hello World");
//         console.log("this.age");
//     }
// };
//         console.log(user.name);
//         console.log(user.age);
//         user.greet();

/////////////////////////

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello World");
        console.log(this.age);
    }
}

// const user1 = new User("Max", 30);
// console.log(user1);

/////////////////////////

// Array

const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[1]);

hobbies.push("Coding");
console.log(hobbies);

const index = hobbies.findIndex((item) => {
    return item === "Cooking";
})
console.log(index); // --> 0;


const editedHobbies =  hobbies.map((item) => item + "!");
console.log(editedHobbies); // --> ["Sports!", "Cooking!", "Reading!"]

const editedHobbies2 =  hobbies.map((item) => ( {text: item} ));
console.log(editedHobbies); // --> ["Sports!", "Cooking!", "Reading!"]

//////////////////
// Destructuring
const [firstName, lastName] = ["Max", "Schwarz"];
console.log(firstName); // --> Max
console.log(lastName); // --> Schwarz

const {name: userName, age} = {name: "Max", age: 30};
console.log(userName); // --> Max
console.log(age); // --> 30

//////////////////
const hobbies2 = ["Sports", "Cooking"];

for (const hobby of hobbies2) {
    console.log(hobby);
}
// --> Sports
// --> Cooking

