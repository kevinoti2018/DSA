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
   
//    console.log(reverseInteger(8))




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

// const array1 = [1, 2, 3, 3, 4, 5, 6, 7];
// const chunkSize1 = 3;
// const result1 = chunkyArray(array1, chunkSize1);
// console.log(result1)




// function mostFrequentCharacter(value) {
//   const charCount = {};
//   let maxCount = 0;
//   let mostFrequentChar = '';

//   for (let i = 0; i < value.length; i++) {
//     const char = value[i];
//     charCount[char] = (charCount[char] || 0) + 1;

//     if (charCount[char] > maxCount) {
//       maxCount = charCount[char];
//       mostFrequentChar = char;
//     }
//   }

//   return mostFrequentChar;
// }

// // Example usage
// const value = 'jonathann';
// const mostAppearingChar = mostFrequentCharacter(value);
// console.log(mostAppearingChar);  // Output: '1'



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





function capitalizeWords(sentence) {
  let words = sentence.split(" ");  // Split the sentence into individual words
  let capitalizedWords = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });  // Capitalize the first letter of each word
  
  return capitalizedWords.join(" ");  // Join the words back into a sentence
}

// Example usage:
let result = capitalizeWords("hello there");
console.log(result);  // Output: "Hello There"

result = capitalizeWords("hi");
console.log(result);  // Output: "Hi"
