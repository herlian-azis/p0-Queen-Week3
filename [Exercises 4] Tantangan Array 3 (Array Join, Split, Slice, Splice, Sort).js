function dataHandling2(arr) {

    arr.splice(4, 0,"Pria", "SMA Internasional Metro")
    arr.splice(1, 1, "Roman Alamsyah Elsharawy")
    console.log(arr);
    
    var arr2 = arr[3].split("/")
    var arr3 = arr2[1]

    switch(Number(arr3)) {
    case 01: arr3 = 'Januari'; break; 
    case 02: arr3 = 'february'; break; 
    case 03: arr3 = 'Maret'; break; 
    case 04: arr3 = 'April'; break; 
    case 05: arr3 = 'Mei'; break; 
    case 06: arr3 = 'Juni'; break;
    case 07: arr3 = 'Juli'; break;
    case 08: arr3 = 'Agustus'; break; 
    case 09: arr3 = 'September'; break; 
    case 10: arr3 = 'Oktober'; break; 
    case 11: arr3 = 'November'; break; 
    case 12: arr3 = 'Desember'; break; 
}
    console.log(arr3);
    // console.log(arr2);
    let date = arr2.join("-")
    let sortedArr =arr2.sort(function(a, b){return b-a})
    console.log(sortedArr);
    console.log(date);
    
        let slice_arr = arr[1].slice(0 ,15)
        console.log(slice_arr);
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input)
