const Capital = (string) => {
    const words = string.trim().split(' ');
    let capital = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capital.join(' ');
  };
  
  console.log(Capital('  sasa hapo  '));
  
  module.exports = Capital;
  