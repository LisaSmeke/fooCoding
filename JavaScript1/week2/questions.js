// QUESTIONS
// 10.1 Q: Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
// 10.1 A: Yes, you can store multiple variable types in an array. For example: 
const sister = ['Nadia', 26, olderThanMe = false, 'lawyer'];
console.log("First, we can confirm that the array 'sister' is an array by using Array.isArray(value). We should get true.")
console.log(Array.isArray(sister));
console.log("Now we access each of the values in the array and check their type.")
console.log(typeof sister[0]);
console.log(typeof sister[1]);
console.log(typeof sister[2]);
console.log(typeof sister[3]);

// 10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
let i1 = (6 / 0);
console.log("First, we declare the variable i1 and check its result, which should be Infinity because we have a number divided by 0.")
console.log(i1);
let i2 = (10 / 0);
console.log("Then, we declare the variable i2 and check its result, which should also be Infinity because it is also a number divided by 0.")
console.log(i2);
console.log("Finally, we compare the variables with an if else statement")
if (i1 === i2) {
    console.log("They are exaclty the same");
} else {
    console.log("They are different");
}