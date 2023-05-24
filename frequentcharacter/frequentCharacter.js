
function frequentCharacter(value) {
    let stringValue = value.toString(); // Convert value to string
  
    let charCount = {};
    let maximumCount = 0;
    let frequentChar = '';
  
    for (let char of stringValue) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
  
      if (charCount[char] > maximumCount) {
        maximumCount = charCount[char];
        frequentChar = char;
      }
    }
  
    return frequentChar;
  }
  
  let value = "1118888";
  let mostAppearingChar = frequentCharacter(value);
  console.log(mostAppearingChar);

  module.exports = frequentCharacter