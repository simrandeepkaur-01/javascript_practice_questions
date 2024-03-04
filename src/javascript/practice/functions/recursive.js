const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);  //fac will execute untill it is true fac(1) 
    // return n <= 2 ? 1 : n * fac(n - 1); // returns 3 because fac(2) is true
};

console.log(factorial(3)); // 6



// The function receives a function defined by a function expression and executes it for every element of the array received as a second argument.

function cuboid(cubeFunc, arrVal) {
    // let result = new Array (arrVal.length);
    for (let i = 0; i < arrVal.length; i++) {
        arrVal[i] = cubeFunc(arrVal[i]);
    }
    return arrVal;
}
function cube(n) {
    return n * n * n;
}
arr = [0, 1, 2, 3]
console.log(cuboid(cube, arr));
console.log(arr);



// recursion
function loop(x) {
    // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
    if (x >= 10) {
      return;
    }
    // do stuff
   return console.log( loop(x + 1)); // the recursive call
  }
  loop(2);
  