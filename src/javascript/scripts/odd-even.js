// function validate(isEvenOrOdd, val) {
// 	for (let i = 0; i < val.length; i++) {
//        val[i] = isEvenOrOdd(val[i]);
// 	}
// 	return val;
// }
// 	let isEvenOrOdd = function (val) {

// 		if (typeof val === 'number') {
// 			if (val % 2 === 0) {
// 				console.log(val, 'is even');
// 			} else {
// 				console.log(val, 'is odd');
// 			}
// 			return;
// 		}
// 		console.log('Not a number');
// 	}









// arr = [10, 20, 30];
// isEvenOrOdd(arr);

// console.log(map(isEvenOrOdd, arr));

// let values = [5, 10, 20, 9];

// function evaluate() {
// 	const checkNumber = (operation, arr) =>{
// 		return arr.map((item)=>{

// 		})
// 	}
// 	// function checkEvenOdd(){

// 	// }
// }

// console.log(evaluate(values));


function test(items) {

	for (let index = 0; index < items.length; index++) {
		items[index] = checkEvenOdd(items[index]);
	}
	
	let checkEvenOdd = function(val) {
		return val % 2 === 0 ? `${val} is even` : `${val} is odd`;
	}
	return items;
}

console.log(test([1, 4, 3, 6,28]));
