// ARRAYS

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"]; // initial array

favoriteAnimals.push("turtle"); // add "turtle" to the array
console.log(favoriteAnimals); // ['blowfish', 'capricorn', 'giraffe', 'turtle']

favoriteAnimals.splice(1, 0, "meerkat"); // add "meerkat" after "blowfish" and before "capricorn"
console.log('I think that the new value of the array will be ["blowfish", "meerkat", "capricorn", "giraffe" "turtle"]') // Because using favoriteAnimals.splice we go to index 1, which is "capricorn", then state 0 to indicate that we won't delete any element, and then write the new element that we want to add between index 0 and 1
console.log(favoriteAnimals); // ['blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle']

console.log(favoriteAnimals.length); // 5
console.log(`The array has a length of: ${favoriteAnimals.length}`); // show message indicating length
favoriteAnimals.splice(3, 1,); // delete "giraffe" from array go to index 3 (giraffe), delete 1 (element)

console.log(favoriteAnimals); // ['blowfish', 'meerkat', 'capricorn', 'turtle']

console.log(favoriteAnimals.indexOf('meerkat')); // 1
console.log(`The item you are looking for is at index: ${favoriteAnimals.indexOf('meerkat')}`)// show message indicating index of 'meerkat'