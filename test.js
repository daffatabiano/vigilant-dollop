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

// const sumDeep = (char, arr) => {
//     // Fungsi bantuan untuk menjelajahi array secara rekursif
//     const traverse = (array, level) => {
//         return array.reduce((sum, element) => {
//             if (typeof element === 'string') {
//                 // Jika elemen adalah string, periksa apakah mengandung karakter
//                 return sum + (element.includes(char) ? level : 0);
//             } else if (Array.isArray(element)) {
//                 // Jika elemen adalah array, jelajahi lebih lanjut
//                 return sum + traverse(element, level + 1);
//             }
//             return sum;
//         }, 0);
//     };

//     // Mulai menjelajahi dari level 1
//     return traverse(arr, 1);
// };

const sumDeep = (char, arr) => {
    const traverse = (array, level) => {
        console.log(array);
        return array.reduce((sum, element) => {
            return typeof element === 'string'
                ? sum + (element.includes(char) ? level : 0)
                : Array.isArray(element)
                ? sum + traverse(element, level + 1)
                : sum;
        }, 0);
    };
    return traverse(arr, 1);
};
// Contoh penggunaan

console.log(sumDeep('Y', ['AB', ['XY'], ['YP']])); // Output: 4

// Testcases
// console.log(sumDeep('Y', ['AB', ['XY'], ['YP']])); // Output: 4
// console.log(sumDeep('X', ['X']));
// console.log(sumDeep('X', ['E', ['E', ['XXXXX']]])); // Output: 3

// bestPractice
// function longest(arr) {
//     const arrStr = arr.map(String);
//     const sortAscending = arrStr.sort((a, b) => a + b - (b + a)).join('');
//     const sortDescending = arrStr.sort((a, b) => b + a - (a + b)).join('');

//     return Number(sortDescending) - Number(sortAscending);
// }

// function bubbleSort(arr, comparator) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (comparator(arr[j], arr[j + 1]) > 0) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// // Ribet ga practice
// function longest(arr) {
//     const arrStr = arr.map(String);
//     const sortAscendingComporator = (a, b) => a + b - (b + a);
//     const sortDescendingComporator = (a, b) => b + a - (a + b);

//     const sortAscending = bubbleSort([...arrStr], sortAscendingComporator).join(
//         ''
//     );
//     console.log(sortAscending);
//     const sortDescending = bubbleSort(
//         [...arrStr],
//         sortDescendingComporator
//     ).join('');
//     console.log(sortDescending);

//     return Number(sortDescending) - Number(sortAscending);
// }
// Contoh penggunaan
// console.log(longest([4, 9041, 376, 5, 10])); // Output: 8003878569
