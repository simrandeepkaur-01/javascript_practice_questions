//other method of fibnacci
let fibonacci2 = function (val) {

    let num1 = 0;
    let num2 = 1;
    let num3;

    for (i = 0; i <= val; i++) {

        num3 = num1 + num2;
        console.log(num1);

        num1 = num2;
        num2 = num3;
    }
    //    return a;
}

fibonacci2(5);