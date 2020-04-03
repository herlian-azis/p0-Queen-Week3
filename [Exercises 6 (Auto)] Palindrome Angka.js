function angkaPalindrome(num) {
    // you can only write your code here!
    let number =num +=1
    while(play = true){
        let ring = number.toString()
        let reverse = ""
        for (let i = ring.length-1; i >= 0 ; i--) {
            reverse += ring[i]    
        }
    if( ring == reverse){
        return number
    }
    number++
}

  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001