function palindrome(kata) {
    // you can only write your code here!
    let KataBaru =""
    for (let i = kata.length-1; i >-1; i--) {
        KataBaru += kata[i]    
    }
    return kata === KataBaru
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false