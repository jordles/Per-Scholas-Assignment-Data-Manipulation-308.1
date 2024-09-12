// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


/* -------------------------------------------------------------------------- */
/*                            PART 1 MATH PROBLEMS                            */
/* -------------------------------------------------------------------------- */
console.group('Part 1: Math Problems');
/* Implement the following:
Check if all numbers are divisible by 5. Cache the result in a variable. */
const divisibleBy5 = [n1,n2,n3,n4].every(num => num % 5 == 0)
console.log(`All numbers are divisible by 5: ${divisibleBy5}`)

/* Check if the first number is larger than the last. Cache the result in a variable. */
const firstLargerThanLast = n1 > n4;
console.log(`The first number is larger than the last: ${firstLargerThanLast}`)

/* Accomplish the following arithmetic chain:
  Subtract the first number from the second number.
  Multiply the result by the third number.
  Find the remainder of dividing the result by the fourth number. */
console.log(`The remainder is: ${(n2-n1) * n3 % n4}`)

/* Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate. */

const isUnder25 = [n1,n2,n3,n4].every(num => num < 25);
console.log(`All numbers are under 25: ${isUnder25}`)

const isValid2 = isSum50 && isTwoOdd && isUnder25 && isUnique;

// Finally, log the results.
console.log(`isValid2: ${isValid2}`);

console.groupEnd();
/* -------------------------------------------------------------------------- */
/*                            PART 2 PRACTICAL MATH                           */
/* -------------------------------------------------------------------------- */
console.group('Part 2: Practical Math');
const distance = 1500;
const budget = 175;
const fuelCost = 3; //cost per gallon

/* Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon. */

const mpg = [
  {speed: 55, mpg: 30},
  {speed: 60, mpg: 28},
  {speed: 75, mpg: 23}
];

// Set up a program to answer the following questions:
// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?

function roadTrip(speed, mpg, distance, budget, fuelCost) {
  const fuelNeeded = +((distance / mpg).toFixed(2));
  const totalFuelCost = +((fuelCost * fuelNeeded).toFixed(2));
  const hours = +((distance / speed).toFixed(2));
  
  console.group(`For a road trip riding on ${speed} mph: `);
  console.log(`You will need ${fuelNeeded} gallons of fuel to complete the trip.`);
  console.log(`Your total fuel cost is $${totalFuelCost} making the trip ${totalFuelCost <= budget ? 'possible' : 'impossible'}.`);
  console.log(`The trip will take ${hours} hours.`);
  console.groupEnd();

  return {speed, hours};
}

const bestSpeed = {
  
}
mpg.forEach(scenario => {
  const {speed, hours} = roadTrip(scenario.speed, scenario.mpg, distance, budget, fuelCost);

  bestSpeed[hours] = speed;
});

let background = "background: skyblue; color: black";
console.log(`%c The best speed is ${Math.min(...Object.values(bestSpeed))} mph with the lowest time of ${Math.min(...Object.keys(bestSpeed))} hours`, background);

console.groupEnd();

