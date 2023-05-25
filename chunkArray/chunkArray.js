function chunkyArray(arr, chunk){
    const chunks =[]
    for(let i=0;i<=arr.length;i+= chunk){
      chunks.push(arr.slice(i,i+ chunk))
    }
    return chunks
  
  }
  
  const array1 = [1, 2,3];
  const chunkSize1 = 3;
  const result1 = chunkyArray(array1, chunkSize1);
  console.log(result1)
  
  module.exports = chunkyArray