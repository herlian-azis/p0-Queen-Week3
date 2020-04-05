function groupAnimals(animals) {
    // you can only write your code here!
    let result =[]
    for (let i = 0; i < animals.length; i++) {
        for (let j = i+1; j < animals.length-1; j++) {
            if(animals[i][0] > animals[j][0]){
                temp = animals[i]
                animals[i]=animals[j]
                animals[j]=temp
            }
        
        }
    }
    for (let i = 0; i < animals.length; i++) {
        let found = false
        for (let j = 0; j < result.length; j++) {
            if (result[j][0][0] == animals[i][0]) {
                result[j].push(animals[i])
                found = true
            }
        }
        if (!found) {      
            result.push([animals[i]])
        }
    }
    return result
    
}
    

    
  
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]


