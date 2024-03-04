let arr = [1, 2, , 4, 5];


let [a, b, c = 30] = arr; //setting default value to variable c.
console.log(a, b, c);  // 1 2 3

let [d, e, f, ...rest] = arr;
console.log(d, e, f, rest); // 1 2 3 [4, 5]

console.log(rest);  // [4, 5]



let [x, , , y] = arr;   // 1 4  (2 empty variables).

[x, , , ...rest] = arr;  // 1 [4, 5] (2, 3 are not assigned anywhere).
console.log(x, rest);


// Nested array

let arr2 = ['simran', 'saini', 21, 'kharar', [5, 10]];
// let [firstName, lastName, age, city, [a2 , b2]] = arr2; 
// console.log(firstName, lastName, city age, [a2, b2]);

let [firstName, ...args] = arr2;
console.log(firstName, args);  //agrs will print the rest output in an array. 


//assigning values to variables in function.

function assign([name, age, city]) {

    console.log(name, age, city);
}
assign(['simran', 21, 'kharar']);


//assigning values to variables in function. - Other Method

function assignment() {
    return ['karman', 15, 'kharar'];
}
let [name, age, city] = assignment();
console.log(name, age, city);