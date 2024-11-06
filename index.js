

// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

// function oddCount(n) {
//     return Math.floor(n / 2)
// }

// oddCount(7)



//8 kyu
// Basic Mathematical Operations

// function basicOp(operation, value1, value2){

//     let num1 = Number(value1);
//     let num2 = Number(value2);
//     switch (operation) {
//         case "+":
//             return num1 + num2
//             break;
//         case "-":
//             return num1 - num2
//             break;
//         case "*":
//             return num1 * num2
//             break;
//         case "/":
//             return num1 / num2
//             break;
//     }
// }


//8 kyu
// Beginner - Lost Without a Map

// function maps(x) {
//     return x.map(i => i * 2);
// }


//8 kyu
//Will you make it?

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     // TODO
//     if ((mpg * fuelLeft) >= distanceToPump) {
//         return true;
//     }
//     else {
//         return false;
//     }
// };


// 8 kyu
// Switch it Up!

// function switchItUp(number) {
//     switch (number) {
//         case 0:
//             return "Zero"
//             break;
//         case 1:
//             return "One"
//             break;
//         case 2:
//             return "Two"
//             break;
//         case 3:
//             return "Three"
//             break;
//         case 4:
//             return "Four"
//             break;
//         case 5:
//             return "Five"
//             break;
//         case 6:
//             return "Six"
//             break;
//         case 7:
//             return "Seven"
//             break;
//         case 8:
//             return "Eight"
//             break;
//         case 9:
//             return "Nine"
//             break;
//         case 10:
//             return "Ten"
//             break;
//     }
// }


// 8 kyu
// Beginner - Reduce but Grow

// function grow(x){return x.reduce((a,b)=>a*b)};


// 6 kyu
// Is a number prime?

// function isPrime(num) {
//     if (num <= 1) { return false }

//     for (i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return true

// }


//8 kyu
//Is n divisible by x and y?

// function isDivisible(n, x, y) {
//     if (n % x == 0 && n % y == 0) {
//         return true;
//     } else {
//         return false;
//     }
// };