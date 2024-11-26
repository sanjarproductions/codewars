

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




// ______________________________________________________


// Another 10 Codewars Challenege


// let num = 10;
// let sum = 0;
// for (i = 1; i <= num; i++) {
//     if(num % i == 0){
//         sum++
//     }
// }

// console.log(sum)



// function oddOrEven(arr) {
//     let sum = 0;
//     arr.map((i) => sum += i)
//     if (sum % 2 == 0) {
//         return "even"
//     }
//     else {
//         return "odd"
//     }
// }

// oddOrEven([1, 2, 3])


// function arrayPlusArray(arr1, arr2) {
//     let newArray = arr1.concat(arr2);
//     let sum = 0;
//     newArray.map((i) => sum += i)
//     return sum
// }


// function smallEnough(a, limit) {
//     return a.every(n => n <= limit);
// }


// function sumMix(x) {
//     let sum = 0;
//     x.map((i) => {
//         if (typeof i === "string") {
//             sum += Number(i)
//         }
//         else {
//             sum += i
//         }
//     })
//     return sum
// }


// function findShort(s) {
//     let arr = s.split(" ").map((i) => i.length);
//     let sm = Math.min(...arr)
//     return sm
// }


// function findAverage(array) {
//     let sum = 0;

//     if (array.length === 0) {
//         return 0
//     }
//     else {
//         array.map((i) => sum += i)
//         return sum / array.length
//     }

// }


// function lovefunc(flower1, flower2) {
//     // moment of truth
//     if (flower1 % 2 != 0 && flower2 % 2 == 0 || flower1 % 2 == 0 && flower2 % 2 != 0) {
//         return true
//     }
//     else {
//         return false
//     }
// }


// function areYouPlayingBanjo(name) {
//     if (name[0] == 'R' || name[0] == 'r') {
//         return name + ' plays banjo'
//     } else {
//         return name + ' does not play banjo'
//     }
// }


// const reverseSeq = n => {
//     let arr = [];
//     for (i = 1; i <= n; i++) {
//         arr.unshift(i);
//     }
//     return arr;
// };


// function invert(array) {
//     let newArr = array.map(i => i * -1)
//     return newArr;
// }


// function doubleInteger(i) {
//     // i will be an integer. Double it and return it.
//     return i * 2;
// }





// November 26th 
// _____________________
// function reverse(string){
//   return string.split("").reverse().join("")
// }

// let result = reverse("sanjar")
// console.log(result)

// __________________
// let arr = [1, 2, 3, 4]
// // console.log(Math.max(...arr))

// arr.map((i) => {
//     console.log(i)
// })


// ___________________
// function FizBuzz(n) {
//     if (n % 5 == 0 && n % 3 == 0) {
//         console.log("FizBuzz")
//     }
//     else {
//         if (n % 5 == 0) {
//             console.log("Buzz")
//         }
//         else if (n % 3 == 0) {
//             console.log("Fiz")
//         }
//     }
// }

// FizBuzz(15)


//___________________
    
    
