function reverseString(string){
    const newstr = string.split('')

    let reversedString =""
   for(let i=newstr.length-1; i>=0 ;i--){
        reversedString += newstr[i] 
   }
   return reversedString
}
console.log (reverseString('rookie'))
module.exports = reverseString