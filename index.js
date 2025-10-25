// 1- masala
// function engUzunPalindrom(str) {
//   let uzunPalindrom = "";


//   function isPalindrom(s) {
//     return s === s.split("").reverse().join("");
//   }

//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       const substr = str.slice(i, j);
//       if (isPalindrom(substr) && substr.length > uzunPalindrom.length) {
//         uzunPalindrom = substr;
//       }
//     }
//   }

//   return uzunPalindrom;
// }
// console.log(engUzunPalindrom("banana"));

// 2-masala
// function rotateArray(arr, son) {
//   const sum = arr.slice(son);
//   const res = arr.slice(0, son);
//   const result = sum.concat(res);

//   return result;
// }

// console.log(rotateArray([1, 2, 3, 4, 5], 2));

// 3-masala

// function towsum(arr, num) {
//     let res=[]
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === num)
//         res.push(i , j);
//     }
//   }
//   return res
// }
// console.log(towsum([2,11,7,15],9));

// 4-masala

// function arrayYigindisi(arr, num) {
//   let yigindi = 0;
//   for (let i = 0; i < arr.length; i++) {
//     yigindi += arr[i];
//   }
//   return yigindi === num;
// }
// console.log(arrayYigindisi([2, 4, 1], 7));

// 5- masala
// function takrorlanmaganSonlar(arr1, arr2) {
//   const natija = [];

//   for (let num of arr1) {
//     if (!arr2.includes(num) && !natija.includes(num)) {
//       natija.push(num);
//     }
//   }
//   for (let num of arr2) {
//     if (!arr1.includes(num) && !natija.includes(num)) {
//       natija.push(num);
//     }
//   }
//   return natija;
// }
// console.log(takrorlanmaganSonlar([1, 2, 3], [3, 4, 5]));

// 6 - masala

function  elementmost(arr) {

    let sum = {}
    let sanash = 0

for (const element of arr) {
    sum[element] = (sum[element] || 0) + 1  // bu yerda valueni qiymatini oshiryapmiz
}
let kattaQiymat = 0
let shuSondan = null

for (const key in sum) {
  let son = sum[key]
  if (son > kattaQiymat) {
    kattaQiymat = son
    shuSondan = key
  }

}

return +shuSondan
}

console.log(elementmost([1, 3, 1, 3, 2, 1]));



// 7-masala
// function oshirSonlar(str) {
//   return str.replace(/\d/g, (match) => {
//     const raqam = parseInt(match);
//     const oshirilgan = raqam +1;
//     return oshirilgan.toString();
//   });
// }

// console.log(oshirSonlar("abs123"));


// 8-masala
// function subarray(arr) {
//   let sum = 0;
//   let array = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= arr[i + 1]) {
//       sum++;
//     } else {
//       array.push((sum += 1));
//       sum = 0;
//     }
//   }
//   let result = 0
// for (let i = 0; i < array.length; i++) {
//    if (array[0] <= array[i])
//     result = array[i]
// }

//   return result;
// }

// console.log(subarray([10, 20, 30, 10, 40, 50, 52, 55, 6]));

// 10-masala

// function matrixsum(arr) {
//     let sum=0
//     for (let i = 0; i < arr.length; i++) {
//        for (let j = 0; j < arr[i].length; j++) {
//        sum+=arr[i][j]
//        }
//     }return sum

//   }  console.log(matrixsum([[1,2,3],[4,5,6],[7,8,9]]));
   
