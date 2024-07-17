// 1-qism


// 1-masala

// let a = +prompt('Sonni kiriting iltimos!');

// if (a > 0) {
//     a ++;
// }
// console.log(a);

// 2-masala

// let a = +prompt('Sonni kiriting iltimos!');

// if (a > 0) {
//     a ++;
// } else {
//     a -= 2;
// }
// console.log(a);

// 3-masala

// let a = +prompt('Sonni kiriting iltimos!');

// if (a > 0) {
//     a ++;
// } else if (a == 0) {
//     a = 10;
// } else {
//     a -= 2;
// }
// console.log(a);

// 4-masala

// let a = +prompt('1-sonni kiriting iltimos!');
// let b = +prompt('2-sonni kiriting iltimos!');
// let c = +prompt('3-sonni kiriting iltimos!');

// let counter = 0;

// if (a > 0) {
//     counter ++;
// }
// if (b > 0) {
//     counter ++;
// }
// if (c > 0) {
//     counter ++;
// }
// if (a == 0) {
//     counter = counter;
// }
// if (b == 0) {
//     counter = counter;
// }
// if (c == 0) {
//     counter = counter;
// }
// console.log(counter);

// 5-masala

// let a = +prompt('1-sonni kiriting iltimos!');
// let b = +prompt('2-sonni kiriting iltimos!');
// let c = +prompt('3-sonni kiriting iltimos!');

// let counter1 = 0;
// let counter2 = 0;

// if (a > 0) {
//     counter1 ++;
// } else if (a < 0) {
//     counter2 ++;
// } else{
//     counter1 = counter1;
//     counter2 = counter2;
// }

// if (b > 0) {
//     counter1 ++;
// } else if (b < 0) {
//     counter2 ++;
// } else{
//     counter1 = counter1;
//     counter2 = counter2;
// }

// if (c > 0) {
//     counter1 ++;
// } else if (c < 0) {
//     counter2 ++;
// } else{
//     counter1 = counter1;
//     counter2 = counter2;
// }
// console.log(counter1 + ` ta musbat ,  ${counter2} ta manfiy` );

// 6-masala

// let a = +prompt('1-sonni kiriting iltimos!');
// let b = +prompt('2-sonni kiriting iltimos!');

// let max;

// if (a > b) {
//     max = a;
// } else{
//     max = b;
// }
// if (a == b) {
//     console.log('Sonlar teng!');
// } else {
//     console.log(max + ' katta');
// }

// 7-masala

// let a = +prompt('1-sonni kiriting iltimos!');
// let b = +prompt('2-sonni kiriting iltimos!');

// let min;

// if (a > b) {
//     min = 2;
// } else{
//     min = 1;
// }
// if (a == b) {
//     console.log('Sonlar teng!');
// } else {
//     console.log('kichigining tartib raqami ' + min);
// }

// 8-masala

// let a = +prompt('1-sonni kiriting iltimos!');
// let b = +prompt('2-sonni kiriting iltimos!');

// let max;
// let min;

// if (a > b) {
//     max = a;
//     min = b;
// } else{
//     max = b;
//     min = a;
// }
// if (a == b) {
//     console.log('Sonlar teng!');
// } else {
//     console.log('Kattasi ' + max + ', ' + 'kichigi ' + min);
// }

// 9-masala

// let a = +prompt('1-sonni kiriting iltimos!');
// let b = +prompt('2-sonni kiriting iltimos!');
// let c;

// let res;

// if (a > b) {
//     c = a;
//     a = b;
//     b = c;
//     res = 'A soni: ' + a + '; ' + 'B soni: ' + b + ';';
// } else{
//     res = 'A soni: ' + a + '; ' + 'B soni: ' + b + ';';
// }
// if (a == b) {
//     console.log('Sonlar teng!');
// } else {
//     console.log(res);
// }

// 10-masala

// let a = +prompt('1-sonni kiriting!');
// let b = +prompt('2-sonni kiriting!');

// if (a == b) {
//     a = a + b;
//     b = a;
// } else {
//     a = 0;
//     b = 0;
// }
// console.log('A ' + a + ',  ' + 'B ' + b);

// 11-masala

// let a = +prompt('1-sonni kiriting!');
// let b = +prompt('2-sonni kiriting!');

// if (a == b) {
//     a = 0;
//     b = 0;
// } else  {
//     if (a > b) {
//         b = a;
//     } else if (a < b) {
//         a = b;
//     }
// }
// console.log('A ' + a + ',  ' + 'B ' + b);

// 12-masala

// let a = +prompt('1-sonni kiriting iltimos!');
// let b = +prompt('2-sonni kiriting iltimos!');
// let c = +prompt('3-sonni kiriting iltimos!');

// if (a == b && b == c) {
//     console.log('Sonlar teng!');
// } else {
//     let min = a;
//     if (a > b) {
//         min = b;
//     } else if (b > c) {
//         min = c;
//     } 
//     if ((a == b) > c) {
//         min = c;
//     } else {
//         min = a;
//         console.log('Kichigi ' + min);
//     }
// }

// 13-masala

// let a = +prompt('1-sonni kiriting iltimos!');
// let b = +prompt('2-sonni kiriting iltimos!');
// let c = +prompt('3-sonni kiriting iltimos!');

// let max;
// let min;

// if (a == b && b == c) {
//     console.log('Sonlar teng!');
// } else {
//     if (a > b) {
//         max = a;
//         min = b;
//     } else if (a < b) {
//         min = a;
//         max = b;
//     } else if (max < c) {
//         max = c;
//     } else if (min > c) {
//         min = c;
//     }
//     let avg = (a + b + c) - (min + max);
//     console.log(`O'rtachasi: ${avg}`);
// }

// 14-masala

// let a = +prompt('1-sonni kiriting iltimos!');
// let b = +prompt('2-sonni kiriting iltimos!');
// let c = +prompt('3-sonni kiriting iltimos!');

// let max;
// let min;

// if (a == b && b == c) {
//     console.log('Sonlar teng!');
// } else {
//     if (a > b) {
//         max = a;
//         min = b;
//     } else if (a < b) {
//         min = a;
//         max = b;
//     } else if (max < c && min > c) {
//         max = c;
//         min = c;
//     }
//     console.log(`Kichigi: ${min}, kattasi: ${max}`);
// }

// 15-masala

// let a = +prompt('1-sonni kiriting iltimos!');
// let b = +prompt('2-sonni kiriting iltimos!');
// let c = +prompt('3-sonni kiriting iltimos!');

// let max;
// let min;

// if (a == b && b == c) {
//     console.log('Sonlar teng!');
// } else {
//     if (a > b) {
//         max = a;
//         min = b;
//     } else if (a < b) {
//         min = a;
//         max = b;
//     } else if (max < c) {
//         max = c;
//     } else if (min > c) {
//         min = c;
//     }
//     let avg = (a + b + c) - (min + max);
//     console.log(max + ',  ' +avg);
// }


// 2-qism


// 1-masala

// let a = +prompt(`Sonni kiriting!`);
// let res;
// if (a > 0) {
//     res = true;
// } else { 
//     res = false;
// }
// console.log(res);

// 2-masala

// let a = +prompt(`Sonni kiriting!`);
// let res;
// if (a % 2 == 1) {
//     res = true;
// } else {
//     res = false;
// }
// console.log(res);

// 3-masala

// let a = +prompt(`Sonni kiriting!`);
// let res;
// if (a % 2 == 0) {
//     res = true;
// } else {
//     res = false;
// }
// console.log(res);

// 4-masala

// let a = +prompt('A sonini kiriting!');
// let b = +prompt('B sonini kiriting!');

// let res;

// if (a > 2 && b <= 3) {
//     res = true;
// } else { 
//     res = false;
// }
// console.log(res);

// 5-masala

// let a = +prompt('A sonini kiriting!');
// let b = +prompt('B sonini kiriting!');

// let res;

// if (a >= 0 || b < -2) {
//     res = true;
// } else { 
//     res = false;
// }
// console.log(res);

// 6-masala

// let a = +prompt('A sonini kiriting!');
// let b = +prompt('B sonini kiriting!');
// let c = +prompt('C sonini kiriting!');

// let res;

// if (a <= b && b <= c) {
//     res = true;
// } else { 
//     res = false;
// }
// console.log(res);

// 7-masala

// let a = +prompt('A sonini kiriting!');
// let b = +prompt('B sonini kiriting!');
// let c = +prompt('C sonini kiriting!');

// let res;

// if (a < b && b < c || a > b && b > c) {
//     res = true;
// } else { 
//     res = false;
// }
// console.log(res);

// 8-masala

// let a = +prompt(`1-sonni kiriting!`);
// let b = +prompt('2-sonni kiriting!')
// let res;
// if (a % 2 == 1 && b % 2 == 1) {
//     res = true;
// } else {
//     res = false;
// }
// console.log(res);

// 9-masala

// let a = +prompt(`1-sonni kiriting!`);
// let b = +prompt('2-sonni kiriting!')
// let res;
// if (a % 2 == 1 || b % 2 == 1) {
//     res = true;
// } else {
//     res = false;
// }
// console.log(res);

// 10-masala


let a = +prompt(`1-sonni kiriting!`);
let b = +prompt('2-sonni kiriting!')
let res;
if (a % 2 == 1 && b % 2 == 0 || a % 2 == 0 && b % 2 == 1) {
    res = true;
} else {
    res = false;
}
console.log(res);