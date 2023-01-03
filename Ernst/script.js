// Exercise 1: Write a JavaScript program that will sort the following values alphabetically: 

const cars= ["Tesla", "Audi", "Volvo", "Mazda", "Fiat", "Ferrari"];
cars.sort();

//-------END-------

//Exercise 2: create  The first array contains the following values apple, banana, kiwi:

const fruit= ["apple", "banana", "kiwi"];
console.log(fruit);

// Add Orange to the array
fruit.push("Orange");
console.log(fruit);

// New element can also be added to an array using the length property:
// const fruit = ["apple", "banana", "kiwi"];
//fruit[fruit.length] = "orange";  // Adds "orange" to fruit



//remove Orange from the array
fruit.pop();
console.log(fruit);

//exercise 2.2 The second array contains the following values monkey, horse, dog:

const animal= ["monkey", "horse", "dog"];
console.log(animal);

//Using different methods, the output should be as follows dog, horse, monkey:
// First sort the array
animal.sort();
console.log(animal);

// Then reverse it:
//animal.reverse();
//console.log(animal);


animal.unshift("cat");
console.log(animal);

// ------END------------

// exercise 3: Create a variable containing the following string mango, cherries,kiwi,grapes,pear,peach,orange,lemon

var vitaminA = 'mango cherries kiwi grapes pear peach orange lemon';
var arrayvitaminA = new Array();
var arrayvitaminA = vitaminA.split(' ');
document.write(arrayvitaminA.join("<br>"));

// END






