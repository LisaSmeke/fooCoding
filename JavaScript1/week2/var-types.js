// VARIABLE TYPES
let firstName = "Lisa";
let lastName = "Smeke";
let age = 29;
let isStudent = true;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(isStudent);

console.log("I think that the variable type of firstName is string");
console.log(typeof firstName);
console.log("I think that the variable type of lastName is also string");
console.log(typeof lastName);
console.log("I think that the variable type of age is number");
console.log(typeof age);
console.log("I think that the variable type of isStudent is boolean");
console.log(typeof isStudent);

if (typeof firstName === typeof lastName) {
    console.log('SAME TYPE')
}
else {
    console.log('NOT SAME TYPE');
}
if (typeof firstName === typeof age) {
    console.log('SAME TYPE')
}
else {
    console.log('NOT SAME TYPE');
}
if (typeof firstName === typeof isStudent) {
    console.log('SAME TYPE')
}
else {
    console.log('NOT SAME TYPE');
}
if (typeof lastName === typeof age) {
    console.log('SAME TYPE')
}
else {
    console.log('NOT SAME TYPE');
}
if (typeof lastName === typeof isStudent) {
    console.log('SAME TYPE')
}
else {
    console.log('NOT SAME TYPE');
}
if (typeof age === typeof isStudent) {
    console.log('SAME TYPE')
}
else {
    console.log('NOT SAME TYPE');
}