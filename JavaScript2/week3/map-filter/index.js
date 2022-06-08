// 1.1 Say you would like to write a program that doubles the odd numbers in an array and throws away the even numbers.

const myNumbers2 = [1, 2, 3, 4];
// First use .filter to eliminate the even numbers in the array
const myOddNumbers = myNumbers2.filter((even) => even % 2 !== 0);
// Then create a new array with the odd numbers * 2 using .map
const myDoubleOddNumbers = myOddNumbers.map((odd) => odd * 2);
console.log(myDoubleOddNumbers);

// 1.2

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0,
  },
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 1.0,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];

// Map the tasks to durations in hours.
const mondayHours = monday.map((time) => time.duration / 60);
const tuesdayHours = tuesday.map((time) => time.duration / 60);
// Merge two arrays into one:
const totalHours = mondayHours.concat(tuesdayHours);
console.log(totalHours);
// Filter out everything that took less than two hours (i.e., remove from the collection)
const twoHoursOrMore = totalHours.filter((duration) => duration >= 2);
console.log(twoHoursOrMore);
// Multiply each duration by a per-hour rate for billing (use €20/hour) and sum it all up.
const earningsPerHour = twoHoursOrMore.map((hours) => hours * 20);
console.log(earningsPerHour);
const salary = earningsPerHour.reduce((x, y) => x + y);
console.log(`€${salary.toFixed(2)}`);
