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
  