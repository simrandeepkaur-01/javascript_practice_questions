let arr = [1, 2, 3];
let obj = { ...arr };
console.log(obj);
console.log(arr);


//sum of elements of an array

function sum(x, y, z) {
    return x + y + z;
}
console.log(sum(...arr));


//change a value of an key in an object.


let obj2 = {
    name: 'simran',
    age: 21,
    city: 'kharar'
}

console.log({ ...obj2, name: 'karman' }); //will overtide the value.
console.log({ name: 'saini', ...obj2 });   // values will not override name : simran.