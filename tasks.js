//ex1
let array1 = [3, 9, 11, 55];
let array2 = ["Str", "alin", "mah"];
let array3 = ['the', 'fox', 'over', 'lazy', 'dog'];
//ex2
// var fruits = ["Tomato", "Banana", "Watermelon"];
// console.log(fruits.indexOf("Banana")); // Output: 1
// console.log(fruits.indexOf("Tomato")); // Output: 0
//ex3
// let favoriteFood = ["Pizza", "Burger", "Sushi", "Pasta", "Salad"];
// let favoriteSport = ["Football", "Basketball", "Tennis"];
// let favoriteMovie = ["Inception", "The Matrix", "Interstellar", "The Godfather"];
//ex4
// function firstOfArray(arr) {
//     return arr[0];
//   }
//   console.log(firstOfArray([1, 4, 5])); // Output: 1
//   console.log(firstOfArray(["t", "u", "g", "x"])); // Output: "t"
//ex5
// function lastOfArray(arr) {
//     return arr[arr.length - 1];
//   }
  
//   console.log(lastOfArray([1, 4, 5])); // Output: 5
//   console.log(lastOfArray(["t", "u", "g", "x"])); // Output: "x"
//ex6
// var array = [0, 5, 7, 9];
// array.shift();
// array.shift();
// array.shift();
// array.push(10);
// array.unshift(8);
// array.unshift(6);
// array.unshift(4);
// array.unshift(3);
// array.unshift(1);
// console.log(array); // Output: [1, 3, 4, 6, 8, 9, 10]
//ex7
// var array2 = [5, 9, -7, 3.5];
// console.log(array2.pop()); // Output: 3.5
// console.log(array2.push(10)); // Output: 4 (new length of array)
// console.log(array2.shift()); // Output: 5
// console.log(array2.unshift(1)); // Output: 4 (new length of array)
//ex8
// function middleOfArray(arr) {
//     let mid = Math.floor(arr.length / 2);
//     if (arr.length % 2 === 0) {
//       return [arr[mid - 1], arr[mid]];
//     } else {
//       return arr[mid];
//     }
//   }
  
//   console.log(middleOfArray([1, 4, 5])); // Output: 4
//   console.log(middleOfArray(["t", "u", "g", "x"])); // Output: ["u", "g"]
//ex9
// var animals = ['cat', 'ele', 'bird'];
// animals[0] = 'zebra';
// animals[1] = 'elephant';
// animals.length = 2;

// console.log(animals); // Output: ['zebra', 'elephant']

// var nums = [1, 2, 3, 8, 9];
// nums = [5, -22, 3.5, 44, 98, 44];

// console.log(nums); // Output: [5, -22, 3.5, 44, 98, 44]
//ex10
// function indexOfArray(arr, index) {
//     return arr[index];
//   }
  
//   var nums = [1, 2, 3, 8, 9];
//   console.log(indexOfArray(nums, 3)); // Output: 8
//   console.log(indexOfArray(nums, 1)); // Output: 2
//   console.log(indexOfArray(nums, 4)); // Output: 9
//ex11
// function arrayExceptLast(arr) {
//     return arr.slice(0, arr.length - 1);
//   }
  
//   var nums = [1, 2, 3, 8, 9];
//   console.log(arrayExceptLast(nums)); // Output: [1, 2, 3, 8]
//ex12
// function addToEnd(arr, value) {
//     arr.push(value);
//     return arr;
//   }
//   var nums = [1, 2, 3, 8, 9];
//   console.log(addToEnd(nums, 55)); // Output: [1, 2, 3, 8, 9, 55]
//ex13
// function addToEnd(arr, value) {
//     arr.push(value);
//     return arr;
//   }
//   var nums = [1, 2, 3, 8, 9];
//   console.log(addToEnd(nums, 55)); // Output: [1, 2, 3, 8, 9, 55]
// function sumArrayWhile(arr) {
//     let sum = 0;
//     let i = 0;
//     while (i < arr.length) {
//       sum += arr[i];
//       i++;
//     }
//     return sum;
//   }

//   console.log(sumArrayWhile(nums)); // Output: 23
//ex14
// function minInArray(arr) {
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < min) {
//         min = arr[i];
//       }
//     }
//     return min;
//   }
  
//   var nums = [1, 2, 3, 8, 9];
//   console.log(minInArray(nums)); // Output: 1
// function minInArrayWhile(arr) {
//     let min = arr[0];
//     let i = 1;
//     while (i < arr.length) {
//       if (arr[i] < min) {
//         min = arr[i];
//       }
//       i++;
//     }
//     return min;
//   }
  
//   console.log(minInArrayWhile(nums)); // Output: 1
  
//ex15
// function removeFromArray(arr, value) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] !== value) {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   }
  
//   var nums = [1, 2, 3, 8, 9];
//   console.log(removeFromArray(nums, 8)); // Output: [1, 2, 3, 9]
// function removeFromArrayWhile(arr, value) {
//     let result = [];
//     let i = 0;
//     while (i < arr.length) {
//       if (arr[i] !== value) {
//         result.push(arr[i]);
//       }
//       i++;
//     }
//     return result;
//   }
  
//   console.log(removeFromArrayWhile(nums, 8)); // Output: [1, 2, 3, 9]
  
//ex16
// function oddArray(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 !== 0) {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   }
  
//   var nums = [1, 2, 3, 8, 9];
//   console.log(oddArray(nums)); // Output: [1, 3, 9]
  
//   function oddArrayWhile(arr) {
//     let result = [];
//     let i = 0;
//     while (i < arr.length) {
//       if (arr[i] % 2 !== 0) {
//         result.push(arr[i]);
//       }
//       i++;
//     }
//     return result;
//   }
  
//   console.log(oddArrayWhile(nums)); // Output: [1, 3, 9]
//ex17
// function aveArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return sum / arr.length;
//   }
  
//   var nums = [1, 2, 3, 8, 9];
//   console.log(aveArray(nums)); // Output: 4.6
  
//   function aveArrayWhile(arr) {
//     let sum = 0;
//     let i = 0;
//     while (i < arr.length) {
//       sum += arr[i];
//       i++;
//     }
//     return sum / arr.length;
//   }
  
//   console.log(ave)
  