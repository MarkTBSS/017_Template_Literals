"use strict";
let population = 73000000;
console.log(typeof population);

console.log(population / 2);
console.log(typeof population);

population++;
console.log(typeof population);

console.log(population);
console.log(population > 6);
console.log(population < 33);

const country = `Thailand`;
const continent = `Asia`;
const language = `Thais`;

const description1 =
    country +
    " is in " +
    continent +
    ", and its " +
    population +
    " million people speak " +
    language;

console.log(description1);

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);
