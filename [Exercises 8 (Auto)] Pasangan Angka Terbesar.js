function pasanganTerbesar(num) {
  // you can only write your code here!
    let newString = num.toString()
    let result = []

  for (let i = 0; i < newString.length-1; i++) {
         result.push (newString[i]+newString[i+1])   
  }
    for (let q = 0; q < result.length; q++) {
         for (let w = q+1; w < result.length; w++) {
             if(result[q]< result[w]){
                 temp = result[q]
                 result[q]=result[w]
                 result[w]= temp
             }       
        }
    }
//    result.sort(function(a, b){return b-a})
    let max = Number(result[0])
   return max
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

