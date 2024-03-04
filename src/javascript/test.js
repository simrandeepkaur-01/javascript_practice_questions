// Question - 1
// Write a function to Swap object keys and values

function swapObjects(obj) {
    let key = Object.keys(obj);
    let value = Object.values(obj);
  

    return [key, value] = [value, key];
    // return  [key, value] = [value, key];
}

let obj = {
    name: 'simran',
    // age: 21
}
// let obj2 = Object.assign( swapObjects(obj))
console.log(swapObjects(obj));


// Question - 2
// Write a function to Shuffle Deck of Cards

// const suits = ["Spades", "Diamonds", "Club", "Heart"];
// const values = [
//  "Ace",
//  "2",
//  "3",
//  "4",
//  "5",
//  "6",
//  "7",
//  "8",
//  "9",
//  "10",
//  "Jack",
//  "Queen",
//  "King",
// ];

// result: 
// The first five cards are:
// Ace of Heart
// 4 of Heart
// Queen of Diamonds
// 3 of Spades
// 10 of Heart



// Question - 3
/* what will be the output of the following code:

const student1 = {
    name: "Hello",
    rollno: 4211
};

const student2 = student1;

student1.name = "world";

console.log(`${ student2.name } ${ student2.rollno }`) */


// world 4211




// Question - 4
// Write a function to join string 
// example: concat('one', 'two', 'three');

function arrToStr(...arr) {
    return arr.join(', ');
}
// console.log(arrToStr('one', 'two', 'three'));


// Question - 5
// write a function to create object from given array, using reduce function
// [[name, "hello"], ["rollno", 444], [age:22]]

let newObj = {};
function arrToObj(arr) {
    return arr.reduce((accum, currentValue) => {
        if (Array.isArray(currentValue) && currentValue.length === 2) {
            let key = currentValue[0];
            let value = currentValue[1];

            accum[key] = value;
        }
        return accum;
    }, {});
}
// console.log(arrToObj([['name', "hello"], ['rollno', 444], ['age', 22]]));


// Question - 6
// Given an array, write a function to calculate it's depth. Assume that a normal array has a depth of 1.
// [1, [3,4,[6]],4,[1],[6]]

function depthOfArr(arr, counter = 1) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            counter++;

            return depthOfArr(arr[i], counter);
        }
    }
    return counter;
}
// arr = [1, [3, 4, [6]], 4, [1], [6]];
// console.log(depthOfArr(arr));


// Question - 7
// Create a function that finds the highest integer in the array using recursion.



// Question - 8
// what will be the output of the following code. Find error (if any)?

// let name = "John";

// function sayHi() {
//     alert("Hi, " + name);
// }

// name = "Pete";

// sayHi();

// Hi, Pete


// Question - 9
// Here we make two counters: counter and counter2 using the same makeCounter function.

// Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?

// function makeCounter() {
//  let count = 0;

//  return function() {
//  return count++;
//  };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert( counter() ); 
// alert( counter() ); 

// alert( counter2() ); 
// alert( counter2() ); 

// 0 1


// Question - 10
// We've got an array of objects to sort by age

// let users = [
//  { name: "John", age: 20, surname: "Johnson" },
//  { name: "Pete", age: 18, surname: "Peterson" },
//  { name: "Ann", age: 19, surname: "Hathaway" }
// ];


let users = [
    { name: 'john', age: 20, surname: 'Johnson' },
    { name: 'Pete', age: 18, surname: 'Peterson' },
    { name: 'Ann', age: 19, surname: 'Hathaway' }
];

users.sort(function (a, b) {
    return a.age - b.age;
});
// console.log(users);



// Question - 11
// What will be the output of the following code
// let arr =[1,2]

// function test(array){
//  array.push(3)
// }

// test([...arr])
// console.log(arr)

// [1, 2]