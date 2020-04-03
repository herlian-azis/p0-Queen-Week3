
//   you can only write your code here!
  function split(sentence, space) {
    var result = []  
    for (let i = 0; i < sentence.length; i++) {
        var kata = ''
        if (sentence[i] !== space) {
            kata += sentence[i]        
        } 
        else {
            result.push(kata)          
        }
    }
    result.push(kata)
    return result
}
function hitungJumlahKata(sentence) {
    return split(sentence, ' ').length
}




// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5