"use strict";

// 1. Function that takes three arguments and returns their sum
function addNumbers(numOne, numTwo, numThree) {
    return console.log(numOne + numTwo + numThree);
}
addNumbers(7, 10, 3);
addNumbers(52, 23, 76);

// 2. Function that receives color and prints "a color car"
function colorCar(color) {
    return console.log(`A ${color} car.`);
}
colorCar('black');
colorCar('yellow');

// 3. Function that takes object as parameter and prints all its properties and values

function Person(firstName, lastName, age, nationality) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.nationality = nationality;
}

let lisa = new Person('Lisa', 'Smeke', 29, 'Mexican')
let silvia = new Person('Silvia', 'Guevara', 32, 'Colombian')
console.log(lisa, silvia);

// 4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

function vehicleType(color, code) {
    if (code === 1) {
        code = 'car'
    }
    else if (code === 2) {
        code = 'motorbike'
    }
    return console.log(`A ${color} ${code}.`)
}

vehicleType('blue', 2)
vehicleType('black', 1)
vehicleType('red', 2)

// 5. Ternary operator to replace if statement:
const singleLine = 3 === 3 ? console.log('yes') : console.log('no');

// 6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car' 

function vehicle(color, code, age) {
    if (code === 1) {
        code = 'car'
    }
    else if (code === 2) {
        code = 'motorbike'
    }
    if (age > 1) {
        age = 'used'
    }
    else if (age <= 1) {
        age = 'new'
    }
    return console.log(`A ${color} ${age} ${code}.`)
}

vehicle('blue', 1, 5)
vehicle('red', 2, 0.4)

// 7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

const vehicles = ['motorbike', 'caravan', 'bike', 'car', 'van', 'bus'];
console.log(vehicles);

// 8. How do you get the third element from that list?
console.log(vehicles[2]);

// 9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

function vehicleList(color, code, age) {
    if (code === 1) {
        code = 'car'
    }
    else if (code === 2) {
        code = 'motorbike'
    }
    else if (code === 3) {
        code = vehicles[2];
    }
    if (age > 1) {
        age = 'used'
    }
    else if (age <= 1) {
        age = 'new'
    }
    return console.log(`A ${color} ${age} ${code}.`)
}
vehicleList('green', 3, 1)

// 10. Use the list of vehicles to write an advertisement. So that it prints something like: 
// "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

let str = `Amazing Joe's Garage, we service `;

for (let type of vehicles) {
    console.log(str + vehicles[0] + 's' + ', ' + vehicles[1] + 's' + ', ' + vehicles[2] + 's' + ', ' + vehicles[3] + 's' + ', ' + vehicles[4] + 's' + ' and ' + vehicles[5] + 'es' + '.')
}

// 11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

// 12. Create an empty object.

Object();

// 13. Create an object that contains the teachers that you have had so far for the different modules.
// 14. Add a property to the object you just created that contains the languages that they have taught you.

const teachers = {
    module1: 'Claudiu Ionel and Seif',
    mod1Language: 'html and CSS',
    module2: 'Sahin',
    mod2Language: 'JavaScript',
}

console.log(teachers)

// 15. Write some code to test two arrays for equality using == and ===. 
// What do you think will happen with x == y, x === y and z == y and z == x?
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log("with x == y, we'll get true bc we have the exact same values and data types, and even though == doesn't consider data types, it can tell that the values are the same - WRONG");
console.log(x == y);

console.log("with x === y we'll get true bc they have the exact same values and data types, which are numbers, 1,2,3 - WRONG");
console.log(x === y);

console.log("with z == y, we'll get true bc z is equal to y - CORRECT");
console.log(z == y);

console.log("with z == x, we'll get true bc z is equal to y and y is equal to x - WRONG");
console.log(z == x);

// 16. Take a look at the following code:
// Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
// Does the order that you assign (o3 = o2 or o2 = o3) matter?

let o1 = { foo: "changeo1" };
let o2 = { foo: "changeo2" };
let o3 = o2;

console.log(o1)
console.log(o2)
console.log(o3)

console.log("Changing o2 changes o3 bc o3 is equal to o2");
console.log("Changing o1 doesn't change o3 bc o3 is equal to o2 and has nothing to do with o1");
console.log("The order in which you assign (o3 = o2 or o2 = o3) matters bc you cannot access o3 before initializing it.");

// 17. What does the following code return? (And why?)

let bar = 42;
console.log(typeof typeof bar);

console.log("It returns STRING bc it's giving us the TYPEOF the TYPEOF bar. bar's type is 'number', and the type of 'number' is string");