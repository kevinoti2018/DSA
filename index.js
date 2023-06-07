// function reverseString(string){
//      const newstr = string.split('')

//      let reversedString =""
//     for(let i=newstr.length-1; i>=0 ;i--){
//          reversedString += newstr[i]
//     }
//     return reversedString
// }
// console.log (reverseString('rookie'))

// function reverseInteger(num) {
//      const reversedString = Math.abs(num).toString().split('').reverse().join('');
//      const reversedNum = parseInt(reversedString, 10);

//      return num < 0 ? -reversedNum : reversedNum;
//    }

//    console.log(reverseInteger(-84))

// console.log(parseInt('3-14'))

// function chunkArray(array, chunkSize) {
//     const result = [];
//     let index = 0;

//     while (index < array.length) {
//       result.push(array.slice(index, index + chunkSize));
//       index += chunkSize;
//     }

//     return result;
//   }

// function binarySearch(arr,target){
//   let leftIndex = 0
//   let rightIndex = arr.length -1
//   while(leftIndex <= rightIndex){
//       let middleIndex = Math.floor((leftIndex + rightIndex)/2)
//       if(arr[middleIndex] == target){
//           return middleIndex
//       }
//       if(target < arr[middleIndex]){
//           rightIndex = middleIndex-1
//       }else{
//           leftIndex= middleIndex +1
//       }
//   }
//   return -1
// }

// function chunkyArray(array, size) {
//   const chunks = [];
//   for (let i = 0; i < array.length; i += size) {
//     chunks.push(array.slice(i, i + size));
//   }
//   return chunks;
// }

//Given an array and chunk size divide the array into many subarrays where each subarray  length is the chunk size.

// function chunkyArray(arr, chunk){
//   const chunks =[]
//   for(let i=0;i<=arr.length;i+= chunk){
//     chunks.push(arr.slice(i,i+ chunk))
//   }
//   return chunks

// }

// const array1 = [];
// const chunkSize1 = 3;
// const result1 = chunkyArray(array1, chunkSize1);
// console.log(result1)

// function frequentCharacter(value) {
//   let charCount = {};
//   let maximumCount = 0;
//   let frequentChar = '';

//   for (let char of value) {
//     if (charCount[char]) {
//       charCount[char]++;
//     } else {
//       charCount[char] = 1;
//     }

//     if (charCount[char] > maximumCount) {
//       maximumCount = charCount[char];
//       frequentChar = char;
//     }
//   }

//   return frequentChar;
// }

// let value = 'issiis';
// let mostAppearingChar = frequentCharacter(value);
// console.log(mostAppearingChar);

// function frequentCharacter(value) {
//   let stringValue = value.toString(); // Convert value to string

//   let charCount = {};
//   let maximumCount = 0;
//   let frequentChar = '';

//   for (let char of stringValue) {
//     if (charCount[char]) {
//       charCount[char]++;
//     } else {
//       charCount[char] = 1;
//     }

//     if (charCount[char] > maximumCount) {
//       maximumCount = charCount[char];
//       frequentChar = char;
//     }
//   }

//   return frequentChar;
// }

// let value = "1118888";
// let mostAppearingChar = frequentCharacter(value);
// console.log(mostAppearingChar);

// function pattern(num) {
//   const n = Math.abs(num);
//   const patternArray = [];

//   for (let i = 0; i < n; i++) {
//     let stair = '';
//     for (let j = 0; j < n; j++) {
//       if (j <= i) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     patternArray.push(stair);
//   }

//   return patternArray;
// }

// module.exports = pattern;

// const num = 5;
// const result = pattern(num);
// console.log(result);





// function steps(n) {
//      for (let row = 0; row < n; row++) {
//          let stair = '';
//          for (let column = 0; column < n; column++) {
//              if (j <= i) {
//                  stair += '#';
//              } else {
//                  stair += ' ';
//              }
//          }
//          console.log(stair);
//      }

// function pattern(num) {
//      let n =  Math.abs(num)
//      for (let  i= 0;  i< n; i++) {
//          let stair = '';
//          for (let j = 0; j < n; j++) {
//              if (j <= i) {
//                  stair += '#';
//              } else {
//                  stair += ' ';
//              }
//          }
//          console.log(stair);
//      }
//  }
//  pattern(-9)

// function steps(n, row = 0, stair = "") {
//   if (n === row) {
//     return;
//   }

//   if (n === stair.length) {
//     console.log(stair);

//     return steps(n, row + 1);
//   }

//   stair.length <= row ? (stair += "#") : (stair += " ");

//   steps(n, row, stair);
// }
// steps(9)



// function generateMatrix(rows, columns) {
//   const matrix = [];
//   for (let i = 0; i < rows; i++) {
//     matrix[i] = [];
//     for (let j = 0; j < columns; j++) {
//       matrix[i][j] = 0; // Initialize all cells with 0
//     }
//   }

//   let value = 1;
//   let increment = 1;
//   let row = 0;
//   let col = 0;

//   while (value <= rows * columns) {
//     // Traverse right
//     for (let i = col; i < columns - col; i++) {
//       matrix[row][i] = value;
//       value++;
//     }
//     // Traverse down
//     for (let i = row + 1; i < rows - row; i++) {
//       matrix[i][columns - col - 1] = value;
//       value++;
//     }
//     // Traverse left
//     for (let i = columns - col - 2; i >= col; i--) {
//       matrix[rows - row - 1][i] = value;
//       value++;
//     }
//     // Traverse up
//     for (let i = rows - row - 2; i > row; i--) {
//       matrix[i][col] = value;
//       value++;
//     }

//     // Update variables for the next layer
//     row++;
//     col++;
//     increment += 2;
//   }

//   return matrix;
// }

// console.log(generateMatrix(1, 2));

// function generateMatrix(n) {
//   const matrix = [];
//   for (let i = 0; i < n; i++) {
//     matrix[i] = [];
//     for (let j = 0; j < n; j++) {
//       matrix[i][j] = 0; // Initialize all cells with 0
//     }
//   }

//   let value = 1;
//   let increment = 1;
//   let row = 0;
//   let col = 0;

//   while (value <= n * n) {
//     // Traverse right
//     for (let i = col; i < n - col; i++) {
//       matrix[row][i] = value;
//       value++;
//     }
//     // Traverse down
//     for (let i = row + 1; i < n - row; i++) {
//       matrix[i][n - col - 1] = value;
//       value++;
//     }
//     // Traverse left
//     for (let i = n - col - 2; i >= col; i--) {
//       matrix[n - row - 1][i] = value;
//       value++;
//     }
//     // Traverse up
//     for (let i = n - row - 2; i > row; i--) {
//       matrix[i][col] = value;
//       value++;
//     }

//     // Update variables for the next layer
//     row++;
//     col++;
//     increment += 2;
//   }

//   return matrix;
// }

// console.log(generateMatrix(3));

// ===========
// =  ===    =
// =  ===    =
// ===========
// 




// function snakeXenzia(size) {

//   const matrix = [];




//   for (let i = 0; i < size; i++) {

//       matrix[i] = [];

//       for (let j = 0; j < size; j++) {

//           matrix[i][j] = 0;

//       }

//   }




//   console.log(matrix);




//   let row = 0;

//   let col = 0;

//   let minRow = 0;

//   let maxRow = size - 1;

//   let minCol = 0;

//   let maxCol = size - 1;

//   let direction = 0;

//   let counter = 1;




//   while (counter <= size * size) {

//       matrix[row][col] = counter;




//       if (direction === 0) {

//           if (col < maxCol) {

//               col++;

//           } else {

//               direction = 1;

//               minRow++;

//               row++;

//           }

//       } else if (direction === 1) {

//           if (row < maxRow) {

//               row++;

//           } else {

//               direction = 2;

//               maxCol--;

//               col--;

//           }

//       } else if (direction === 2) {

//           if (col > minCol) {

//               col--;

//           } else {

//               direction = 3;

//               maxRow--;

//               row--;

//           }

//       } else if (direction === 3) {

//           if (row > minRow) {

//               row--;

//           } else {

//               direction = 0;

//               minCol++;

//               col++;

//           }

//       }




//       counter++;

//   }




//   return matrix;

// }


function fibonacci(n){
  // 0 and one are constants thus we create an array to them
  const fib = [0,1] ;
  for(let i= 2; i<=n;i++){
      fib[i] = fib[i-1] + fib[i-2]
  }
  return fib
}
// O(n)
console.log(fibonacci(3))
console.log(fibonacci(9))
console.log(fibonacci(5))


function isPrime(n){
  if(n<2){
      return false
  }
  for (let i=2;i<n;i++){
      if(n%i==0){
          return false
      }
      return true
  }
}
// O(n)
console.log(isPrime(5));
console.log(isPrime(4));
console.log(isPrime(7));