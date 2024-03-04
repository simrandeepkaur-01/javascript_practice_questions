// primitive datatypes

// 1. number => (2 ^ 53)- limit
// 2. null => returns typeof object.
// 3. bigInt 
// 4. Boolean
// 5. String 
// 6. Symbol => unique
// 7. Undefined => datatype- Undefined.


//***************************************CONVERSION*****************************************************

// -----------Number()---------------------

// 33 => Number
// Number('33abc') => NaN (typeof - Number)
// Number(undefined) => NaN
// Number(true) => 1 Number(false) => 0


// --------------Boolean()----------------------

// boolean(1) => true;
// boolean(0)=> false;
// bollean("") => false;
// boolean(NaN)=> false;


// ----------------String()-----------------------

// String(NaN) => NaN
// String(undefined) => undefined
// String(null) => null
// String(95) => number



// ********************************************OPERATIONS*************************************************

// console.log('1' + 2 + 2) => 122
// console.log(1 + 2 + '2') => 32
// console.log(+true) => 1
// console.log( typeof(+true)) => number 
// console.log(+'') => 0 (type number)


// -------------------------------------------------------------------------------------------------

// let num1, num2, num3;
// num1 = num2 = num3 = 5+5;
// returns 10 for all num1,num2 and num3

// num1, num2, num3 = 8+8;   => num1 and num2 remains 10 and the value of num3 will change as 16..


// ***************************************COMPARISONS****************************************************

// null == 0 (false) * null == 0?
// null > 0 (false)  * 0 > 0?
// null >= 0 (true)  *>,>= (comparisons) convert null to Zero



// Undefined == 0 (false)  
// Undefined > 0  (false) 
// Undefined >= 0 (false) 