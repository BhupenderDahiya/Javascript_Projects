// let sum = 0;
// let n = 50;

// for(i=1; i<=n; i++ ){
//     sum = sum + i
// }

// console.log(sum);


// function OddNum(start, end) {
//     for (let i = start; i <= end; i++) {
//         if (i % 2 !== 0) {
//             console.log(i);
//         }
//     }
// }

// OddNum(1, 10);

// function EvenNum(start, end) {
//     for (let i = start; i <= end; i++) {
//         if (i % 2 == 0) {
//             console.log(i);
//         }
//     }
// }

// EvenNum(11, 20)

// function MultiNum(start, end) {
//     for (let i = start; i <= end; i++) {
//         if(i - 2 == 0) {
//             console.log(i);
//         }
//     }
// }

// MultiNum(21, 30)

// let num = 5;
// let sum = 0;

// function Even(start, end){
//     for(let i = start; i<=end; i++) {
//        sum = num * i
//        console.log(sum)
//     }
// }

// Even(1,10)

function primeNumber(num) {
    if (num <= 1)
        return false;

    for(let i = 2;  i < num; i++) {
        if (num % i == 0) 
        return false;
    }
        return true;
}

console.log(primeNumber(12));