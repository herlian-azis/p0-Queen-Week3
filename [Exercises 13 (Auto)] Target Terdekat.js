function targetTerdekat(arr) {
    // you can only write your code here!
    let strO = []
    let strX = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]== "o") {
            strO.push(i)
        }
        else if (arr[i]== "x") {
            strX.push(i)
        }      
    }
    let result=[]
    for (let p = 0; p < strX.length; p++) {
        result.push(Math.abs(strO[0]-strX[p]))       
    }
    for (let j = 0; j < result.length; j++) {
        for (let k = j+1; k < result.length; k++) {
                if(result[k] < result[j]){
                    temp = result[k]
                    result[k]=result[j]
                    result[j]=temp
                }           
        }      
    }
    if(result.length == 0){
        return 0
    }else {

        return result[0]
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2