// ******************************************************* Destructuring - Objects ********************************************************
let { a1, b1 } = { a1: 1, b1: 5 };
console.log(a1, b1)

let obj = { a1: 1, b1: 5 };
console.log(obj);



let user = {
    name: 'simran',
    age: 21,
    city: 'kharar'
}

// console.log(user.name , user.age , user.city);
let { name, age, city } = user;      // variable name should be same as key-name..
console.log({ name, age });
console.log(name, age);



// let { name , , city} = user;  // empty variable is not acceptable. but in array it is.



// alias or rename key names.

let { name: n, age : a, city : c } = user;
console.log(c, a, n);


