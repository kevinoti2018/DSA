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
function pattern(num) {
  const n = Math.abs(num);
  const patternArray = [];

  for (let i = 0; i < n; i++) {
    let stair = '';
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    patternArray.push(stair);
  }

  return patternArray;
}

module.exports = pattern;

const num = 5;
const result = pattern(num);
console.log(result);





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