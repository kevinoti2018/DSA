function reverseInteger(num) {
    const reversedString = Math.abs(num).toString().split('').reverse().join('');
    const reversedNum = parseInt(reversedString, 10);
    
    return num < 0 ? -reversedNum : reversedNum;
  }
  
  console.log(reverseInteger(-84))

  module.exports= reverseInteger