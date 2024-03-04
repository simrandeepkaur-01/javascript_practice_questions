//********** Use of spread/rest operator. When we don't know the length of arguments and parameters to pass. **********


function dynamicLengthOfArguments(val1, val2, ...num) {       //Returns an Array. Remove val1 and val2.
    return num;
}

let result = dynamicLengthOfArguments(10, 20, 30, 40, 50);
console.log(result);


//***********************************Objects*****************************************

const user = {
    userName: 'simran',
    userId: 2
}

function handleObjects(val) {
    return `Username : ${val.userName} \nuserid : ${val.userId}`;
}

// console.log(handleObjects(user));
console.log(handleObjects({
    userName: 'Karman',
    userId: 8
}));



// ******************************************Array***********************************************

let arr = [10, 20, 30, 40, 50];
function handleArray(val) {             //spread operator can also be used here. ...val
    return val;
}

console.log(handleArray(arr));