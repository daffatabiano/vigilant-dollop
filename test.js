// Silakan tulis kode yang berisi setidaknya satu fungsi utama yang disebut "sumDeep" yang menerima satu array terstruktur seperti tree dan satu karakter. Fungsi tersebut akan mengembalikan sebuah bilangan bulat positif yang merupakan jumlah tingkat node di mana setiap node mengandung parameter kedua. Tingkat dari root node adalah 1. Anggaplah parameter tidak pernah kosong (array selalu memiliki setidaknya satu node sebagai root node dan parameter kedua selalu satu karakter) dan tinggi tree memiliki batasan.

// Contoh:
// arr = ["AB", ["XY"], ["YP"]]
// char = "Y"

// Representasi visual,
//    AB           Tingkat Node: 1
//  /      \
// X(Y)     (Y)P    Tingkat Node: 2

// Pada tingkat 2 dari node, kita menemukan 2 node dengan karakter "Y". Tugas kita adalah menjumlahkan tingkat dari node-node yang mengandung karakter "Y". "Y" pertama ditemukan pada tingkat 2, dan "Y" kedua juga ditemukan pada tingkat 2. Oleh karena itu, 2 + 2 sama dengan 4.

// Deskripsi Fungsi
// Lengkapi fungsi "sumDeep" di bawah ini.

// const sumDeep = (char, arr) => {}

// "sumDeep" memiliki parameter berikut:

// string 2d array arr: sebuah array dengan format mirip JSON
// string char: satu karakter dari sebuah string

// returns

// int: sebuah bilangan bulat positif yang merupakan jumlah tingkat node di mana setiap node mengandung parameter kedua

// Contoh Testcase:
// Testcase 0
// Input: sumDeep("Y", ["AB", ["XY"], ["YP"]])
// Output:
// 4

// Testcase 1
// Input: sumDeep("X", ["E", ["E", ["XXXXX"]]])
// Output:
// 3

const sumDeep = (char, arr) => {
    // Fungsi bantuan untuk menjelajahi array secara rekursif
    const traverse = (array, level) => {
        return array.reduce((sum, element) => {
            if (typeof element === 'string') {
                // Jika elemen adalah string, periksa apakah mengandung karakter
                return sum + (element.includes(char) ? level : 0);
            } else if (Array.isArray(element)) {
                // Jika elemen adalah array, jelajahi lebih lanjut
                return sum + traverse(element, level + 1);
            }
            return sum;
        }, 0);
    };

    // Mulai menjelajahi dari level 1
    return traverse(arr, 1);
};

// Contoh penggunaan
console.log(sumDeep('Y', ['AB', ['XY'], ['YP']])); // Output: 4

// // Testcases
console.log(sumDeep('Y', ['AB', ['XY'], ['YP']])); // Output: 4
console.log(sumDeep('X', ['E', ['E', ['XXXXX']]])); // Output: 3

function longest(arr) {
    const arrStr = arr.map(String);
    const max = arrStr.sort((a, b) => a + b - (b + a)).join('');
    const min = arrStr.sort((a, b) => b + a - (a + b)).join('');
    return parseInt(min) - parseInt(max);
}

// Contoh penggunaan
console.log(longest([4, 9041, 376, 5, 10])); // Output: 8003878569
