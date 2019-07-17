// Console out the numbers from 1-20, but only if they're divisible by 3.
// Use `if` and a modulus operation.
let done = false;
const nums = 20;
let i = nums;
const howdyString = "Boy howdy am I good at this!";
const gettingBetter = "And getting better every day.";

for (i = 1; i < nums; i++) {
  if (i % 3 === 0) {
    console.log("Challenge #1" + " " + i);
  }
}
// console.log("Challenge #2");

// while (!done && i < nums) {
//   const divisBy3 = i % 3 === 0;
//   console.log("Challenge #2" + " " + i);
// }
// Same problem as #1, but no `if`s, `mods`, or `but`s (and no, that last one is
// not a thing). If you did it right, you should run the loop 6 times with 1
// console log per loop. That's called... a clue!

console.log("Challenge #3//////////////////////////");

// Console out the numbers from 1-20. BACKWARDS.
for (i = 20; i >= 1; i--) {
  if (i % 3 === 0) {
    console.log("Challenge #3" + " " + i);
  }
}

console.log("Challenge #4/////////////////////////");

for (i = 0; i < howdyString.length; i++) {
  console.log(howdyString[i]);
}

// For the string 'Boy howdy am I good at this!', console out the letters
// individually.

console.log("Challenge #5/////////////////////////");
for (i = 0; i < howdyString.length; i++) {
  console.log(howdyString[i]);
}

// For the string, 'And getting better every day.', starting with the second
// character, print out every third character.

console.log("Challenge #6///////////////////////");
const theBestyet = 'Am I the best!';

for (i = 1; i < gettingBetter.length; i++) {
  console.log(gettingBetter[i]);
}
// For the string 'Am I the best?', console out the letters individually, AND
// UPPERCASED.

const theBest = 'Whoa, I am the best!';
let spaceCount = 0;
for (i = 0; i < theBest.length; i++) {
    if (theBest[i] === " ") {
        spaceCount += 1;
    }
    if (spaceCount === 2) {
        console.log(theBest[i].toUpperCase());
    } else {
        console.log(theBest[i]);
    }
}

// For the string 'Whoa, I am the best!', console out the letters individually,
// but also capitalize the letters in the third word.

console.log('Challenge #8//////////////////////////////');
const death = 'I am become death, destroyer of worlds.';
for (i = death.length; i > 0; --i) {
console.log(death[i]);
}

// For the string 'I am become death, destroyer of worlds.', console out the letters
//  individually, but backwards. That is, the first console log should be
// `.`, followed by `s`, followed by `d`, and so on.

// console.log('Challenge #9');

const names = "Colin|Mesuara|Drew|In Seop|Emma|Ben|J|Ryan|Olgy|Mike|Chris|John";

// Console out the individual letters of each person in class today, which are
// in the string above. Every time you start a new name (including the first
// one!), console out the string: 'Here today is:'.

// You'll know you're at a new person's name when you hit the pipe character.

// Don't print the pipes!
