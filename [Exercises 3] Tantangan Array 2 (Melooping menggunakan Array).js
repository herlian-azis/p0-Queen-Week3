var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

function dataHandling(array) {
    let result =""
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {             
    }
    result += `Nomor ID: ${array[i][0]}
Nama Lengkap: ${array[i][1]}
TTL: ${array[i][2]} ${array[i][3]}
Hobi: ${array[i][4]}\n\n` 
    }
    return result
}

console.log(dataHandling(input))