function loop(x) {

    if (x >= 10) {
        return;
    }

    loop(x + 1);
    // console.log(x);
}
loop(0);


//Find depth using recursion.
let counter = 0;
function calculateDepth(arr) {
    for (let index = 0; index < arr.length; index++) {
        if (Array.isArray(arr[index])) {
            counter++;
 
            return calculateDepth(arr[index], counter);
        }
    }
    return counter;
}
console.log(calculateDepth([1, 2, [3, 4, [5, 6, [7, 8, [9, 10, [12]], [11]]]]]));