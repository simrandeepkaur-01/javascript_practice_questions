// function fac(x) {
//     return x === 1 ? true : x * fac(x - 1);
// }

// console.log(fac(4));

let result = 0;

function fact(arr, counter = 0) {

    if (counter > arr.length) {
        return;
    }

    result += fact(arr[counter],counter);
    console.log(counter++);
    return result;

}

// for (let i = 0; i < arr.length; i++) {

//     // if(arr[i] === 4){
//     //     return;
//     // }

//    result =   fact(arr[i] + arr[i]);
//     // + arr[2] + arr[3];
//     return result;

// }
// }

console.log(fact([10, 22, 30, 4]));