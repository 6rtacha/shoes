// ZR-TASK:

// Shunday function yozing, u parametridagi string ichida 1 martadan ortiq qaytarilmagan
// birinchi harf indeksini qaytarsin.
// MASALAN: firstUniqueCharIndex(“stamp”) return 0

function firstUniqueCharIndex(str: string): number {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return i;
    }
  }
  return -1;
}
console.log(firstUniqueCharIndex("stamp"));

// ZQ-TASK:

// Shunday function yozing, u parametridagi arrayni ichidagi 1 marta kelgan elemnetni qaytarsin.
// MASALAN: singleNumber([4, 2, 1, 2, 1]) return 4

// function singleNumber(arr: number[]) {
//   let single: number = 0;
//   const arr1 = arr.sort();

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       single = arr[i];
//     }
//   }
//   return single;
// }
// const result = singleNumber([4, 2, 1, 2, 1]);
// console.log(result);

// ZP-TASK:

// Shunday function yozing, u parametridagi array ichida 2 marta qaytarilgan sonlarni alohida araryda qaytarsin.
// MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4]

// function findDuplicates(arr: number[]) {
//   const duplicates: number[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] == arr[j] && !duplicates.includes(arr[i])) {
//         duplicates.push(arr[i]);
//       }
//     }
//   }
//   return duplicates;
// }
// const result = findDuplicates([1, 2, 3, 4, 5, 4, 3, 4]);
// console.log(result);

// ZO-TASK:

// Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
// MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6}

// function countNumberAndLetters(str: string) {
//   let number: number = 0;
//   let letter: number = 0;

//   const arr = str.replace(/[^a-zA-Z0-9]/g, "").split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (!isNaN(Number(arr[i]))) {
//       number++;
//     } else if (typeof arr[i] == "string") {
//       letter++;
//     }
//   }
//   return { number: number, letter: letter };
// }
// const result = countNumberAndLetters("string152%¥");
// console.log(result);

// ZN-TASK:

// Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin.
// Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true

// function areParenthesesBalanced(str: string) {
//   let open: string[] = [];
//   let close: string[] = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "(") {
//       open.push(str[i]);
//     } else if (str[i] === ")") {
//       close.push(str[i]);
//     }
//   }
//   return open.length == close.length ? true : false;
// }
// const result = areParenthesesBalanced("string()ichida(qavslar)soni()balansda");
// console.log(result);

// ZM-TASK:

// Shunday function yozing, uni array va number parametri bolsin. Ikkinchi parametrda berilgan raqamli
// indexgacha arrayni orqasiga ogirib qaytarsin.
// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]

// function rotateArray(arr: number[], num: number) {
//   const index: number = arr.length - num - 1;
//   const arr1 = arr.splice(num + 1, index);
//   const result1 = arr1.concat(arr);

//   return result1;
// }

// const result = rotateArray([1, 2, 3, 4, 5, 6], 3);
// console.log(result);

// ZL-TASK:

// Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
// MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”

// function stringToKebab(str: string) {
//   return str.toLowerCase().split(" ").join("-");
//   // const kebabCase = str.replace(/([a-z0-9A-Z]) ([a-z0-9A-Z])/g, "$1-$2").toLowerCase();
// }
// const result = stringToKebab("I love Kebab");
// console.log(result);

// TASK ZK:

// Shunday function yozing, bu function har bir soniyada bir marotaba
// console'ga 1'dan 5'gacha bo'lgan raqamlarni chop etsin va
// 5 soniyadan so'ng function o'z ishini to'xtatsin

// MASALAN: printNumbers();

// function printNumbers() {
//   const numbers: string = "1, 2, 3, 4, 5";
//   let count: number = 0;
//   let countToFive = setInterval(() => {
//     console.log(numbers);
//     count++;
//     if (count > 5) {
//       clearInterval(countToFive);
//     }
//   }, 1000);
// }
// printNumbers();

// ZJ-TASK:

// Shunday function yozing, u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
// MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8

// function reduceNestedArray(arr: any[]) {
//   const arrFlat = arr.flat(Infinity);
//   const result1 = arrFlat.reduce((total, ele) => {
//     return total + ele;
//   }, 0);
//   return result1;
// }
// const result = reduceNestedArray([1, [1, 2, [4]]]);
// console.log(result);

// ZI-TASK:

// Shunday function yozing, u function ishga tushgandan 3 soniyadan keyin "Hello World" ni qaytarsin.
// MASALAN: delayHelloWorld("Hello World") return "Hello World"

// function delayHelloWorld(str: string) {
//   setTimeout(() => console.log(str), 3000);
// }
// delayHelloWorld("Hello World");

// ZH-TASK:

// Shunday function yozing, u berilgan array parametrni ichidagi eng katta raqamgacha tushib qolgan
// raqamlarni bir arrayda qaytarsin.
// MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6]

// function findDisappearedNumbers(arr: number[]) {
//   const result1: number[] = [];
//   const lastNumber: any = arr.slice(-1);
//   for (let i = 1; i < lastNumber; i++) {
//     if (!arr.includes(i)) {
//       result1.push(i);
//     }
//   }

//   return result1;
// }
// const result = findDisappearedNumbers([1, 3, 4, 7]);
// console.log(result);

// TASK ZG

// String sifatida berilgan string parametrni
// snake case'ga o'tkazib beradigan function yozing.

// MASALAN: convertToSnakeCase('name should be a string')
// return 'name_should_be_a_string'

// function convertToSnakeCase(str: string) {
//   return str.split(" ").join("_");
// }
// const result = convertToSnakeCase("name should be a string");
// console.log(result);

// ZE-TASK:

// Shunday function yozing, uni  string parametri bolsin.
// String ichida takrorlangan harflarni olib tashlab qolganini qaytarsin
// MASALAN: removeDuplicate('stringg') return 'string'

// function removeDuplicate(str: string) {
//   const strArray = str.split("");
//   for (let i = 0; i < strArray.length; i++) {
//     for (let j = i + 1; j < strArray.length; j++) {
//       if (strArray[i] == strArray[j]) {
//         strArray.splice(i, 1);
//       }
//     }
//   }
//   return strArray.join("");
// }
// const result = removeDuplicate("stringg");
// console.log(result);

// TASK ZD

// Shunday function yozing. Bu function o'ziga, parametr sifatida
// birinchi oddiy number, keyin yagona array va uchinchi bo'lib oddiy number
// qabul qilsin. Berilgan birinchi number parametr, arrayning tarkibida indeks bo'yicha hisoblanib,
// shu aniqlangan indeksni uchinchi number parametr bilan alashtirib, natija sifatida
// yangilangan arrayni qaytarsin.

// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2];

// Yuqoridagi misolda, birinchi raqam bu '1' va arrayning '1'chi indeksi bu 3.
// Bizning function uchinchi berilgan '2' raqamini shu '3' bilan almashtirib,
// yangilangan arrayni qaytarmoqda.

// function changeNumberInArray(num: number, arr: number[], num1: number) {
//   arr[num] = num1;
//   return arr;
// }
// const result = changeNumberInArray(1, [1, 3, 7, 2], 2);
// console.log(result);

// TASK ZC

// Selisy (°C) shkalasi bo'yicha raqam qabul qilib, uni
// Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing.

// MASALAN: celsiusToFahrenheit(0) return 32;
// MASALAN: celsiusToFahrenheit(10) return 50;

// Yuqoridagi misolda, 0°C, 32°F'ga teng.
// Yoki 10 gradus Selsiy, 50 Farenhaytga teng.

// °C va °F => Tempraturani o'lchashda ishlatiladigan o'lchov birligi.

// function celsiusToFahrenheit(num: number) {
//   return (num * 9) / 5 + 32;
// }
// const result = celsiusToFahrenheit(10);
// console.log(`${result}°F`);

// // ZB-TASK:

// // Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin
// // MASALAN: randomBetween(30, 50) return 45

// function randomBetween(num: number, num1: number) {
//   let randomNumber = Math.floor(Math.random() * (num1 - num + 1)) + num;
//   return randomNumber;
// }
// const result = randomBetween(30, 50);
// console.log(result);

// ZA-TASK:

// Shunday function yozing, u array ichidagi objectlarni “age” qiymati boyicha sortlab bersin.
// MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]

// function sortByAge(arr: any[]) {
//   const result = arr.sort(function (a, b) {
//     return a.age - b.age;
//   });
//   console.log(result);
// }

// sortByAge([{ age: 23 }, { age: 21 }, { age: 13 }]);

// Z-TASK:

// Shunday function yozing, u sonlardan tashkil topgan array qabul qilsin. Function arraydagi juft sonlarni yigindisini qaytarsin
// MASALAN: sumEvens([1,2,3]) return 2

// function sumEvens(arr: number[]) {
//   let result1: number = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       result1 += arr[i];
//     }
//   }
//   return result1;
// }
// const result = sumEvens([1, 2, 3]);
// console.log(result);

// Y-TASK:

// Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
// MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

// function findIntersection(arr: number[], arr1: number[]) {
//   const intNumber: number[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr1.length; j++) {
//       if (arr[i] == arr1[j]) {
//         intNumber.push(arr[i]);
//       }
//     }
//   }
//   return intNumber;
// }
// const result = findIntersection([1, 2, 3], [3, 2, 0]);
// console.log(result);

// TASK X

// Shunday function yozing, uni object va string parametrlari bo'lsin.
// Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
// necha marotaba takrorlanganlini sanab qaytarsin.
// Eslatma => Nested object'lar ham sanalsin
// MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2
// Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
// Funktsiya, shu ikkinchi argument 'model', birinchi argument object
// tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda

// function countOccurrences(obj: any, str: string) {
//   let count: number = 0;
//   for (let key in obj) {
//     if (key === str) {
//       count++;
//     }

//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       for (let nestedKey in obj[key]) {
//         if (nestedKey === str) {
//           count++;
//         }
//       }
//     }
//   }
//   return count;
// }

// const result = countOccurrences(
//   { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } },
//   "model"
// );
// console.log(result);

// W-TASK:

// Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan
// uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
// MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]

// function chunkArray(arr: number[], num: number) {
//   const result: any = [];
//   for (let i = 0; i < arr.length; i += num) {
//     const result1 = arr.slice(i, i + num);
//     result.push(result1);
//   }
//   console.log(result);
// }
// chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);

// V-TASK:

// Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// function countChars(str: string) {
//   const strAr = str.split("");
//   let letterCount: any = {};
//   for (let i = 0; i < strAr.length; i++) {
//     if (letterCount[strAr[i]]) {
//       letterCount[strAr[i]]++;
//     } else {
//       letterCount[strAr[i]] = 1;
//     }
//   }
//   console.log(letterCount);
// }

// countChars("hello");

// U-TASK:

// Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// function sumOdds(arr: number) {
//   let count: number = 0;
//   for (let i = 1; i < arr; i += 2) {
//     count++;
//   }
//   return count;
// }

// const result = sumOdds(11);
// console.log(result);

// T-TASK:

// Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
// MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]

// function mergeSortedArrays(arr: number[], arr1: number[]){
//     const arr3 = arr.concat(arr1);
//     const result1 = arr3.sort((a, b) => {
//         return a - b;
//     })
//     return result1;
// }

// const result = mergeSortedArrays([0,3,4,31], [4,6,30]);
// console.log(result);

// S-TASK:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2

// function missingNumber(arr: number[]){
//     const sortArr = arr.sort();
//     let missingNumber: number = 0;
//     for (let i = 0; i < sortArr.length; i++) {
//         if (sortArr[i] !== i + 1){
//             missingNumber = i + 1;
//         }
//     }
//     return missingNumber;
// }
// const result = missingNumber([3, 0, 1]);//[0, 1, 3]
// console.log(result);

// R-TASK:

// Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
// MASALAN: calculate("1+3") return 4;

// function calculate(str: string){
//     let result: number = 0;
//     const result1 = str.split("").map(ele => {
//         return parseInt(ele);
//     });
//     for ( let i = 0; i < result1.length; i++){
//         if (!isNaN(result1[i])){
//             result += result1[i];
//         }
//     }
//     console.log(result);
// }

// calculate("1+3");

// Q-TASK:

// Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string.
// Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true;
// hasProperty({name: "BMW", model: "M3"}, "year") return false

// function hasProperty(obj: object, str: string): any{
//     let objArr = Object.keys(obj);
//     let result = objArr.includes(str);
//     return result;
// }
// const result1 = hasProperty({name: "BMW", model: "M3"}, "model");
// console.log(result1);

// const result2 = hasProperty({name: "BMW", model: "M3"}, "year");
// console.log(result2);

// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray(obj: object) {
//     let result = Object.entries(obj);
//     console.log(result);
// }

// objectToArray( {a: 10, b: 20});

// O-TASK:

// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

// function calculateSumOfNumbers(arr: any[]){
//     let sumOfNumbers: number = 0;
//     for( let i = 0; i < arr.length; i++){
//         if(typeof(arr[i]) === "number"){
//             sumOfNumbers += arr[i];
//         }
//     }
//     return sumOfNumbers;
// }
// const result = calculateSumOfNumbers([10, "10", {son: 10}, true, 35]);
// console.log(result);

// N-TASK:

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham,
// orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// function palindromCheck(str: string) {
//     const arr = str.toLocaleLowerCase().split("");
//     const reverseStr = arr.reverse().join('');
//     if(str !== reverseStr){
//         return false;
//     }else{
//         return true;
//     }
// }
// const result = palindromCheck("dad");
// console.log(result);

// M-TASK:

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin
//  va array ichidagi har bir raqam uchun raqamni ozi
//  va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib,
// hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// function getSquareNumbers(param: number[]){
//     const result = param.map((ele) => {
//         return {
//             number: ele,
//             square: ele * ele
//         }
//     });
//     console.log(result);
// }

// getSquareNumbers([1, 2, 3]);

// L-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

// function reverseSentence(param: string) {
//     const arryParam = param.toLocaleLowerCase().split(" ");
//     const newParam = arryParam.map((ele) => {
//         return ele.split("").reverse().join('');

//     });
//     const result = newParam.join(' ');
//     console.log(result);

// }

// reverseSentence("we like coding!");

// K-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

// function countVowels(argumet: string){
//     const argumentArray = argumet.toLocaleLowerCase().split("");
//     let count: number = 0;
//     const vowel: string[] = ['a', 'e', 'i', 'o', 'u'];

//     for(let i = 0; i < argumentArray.length; i++) {
//         if(vowel.includes(argumentArray[i])){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("string"));

// J-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

// function findLongestWord(parametr: string){
//     let longestCount: number = 0;
//     let index: number = 0;
//     const arrayParametr = parametr.split(" ");

//     for(let i = 0; i < arrayParametr.length; i++) {
//         if(arrayParametr[i].length > longestCount) {
//             longestCount = arrayParametr[i].length;
//             index = i;
//         }
//     }
//     console.log(arrayParametr[index]);
// }

// findLongestWord("I come from Uzbekistan");

/* Project Standards:
    -Logging standards
    -Naming standards
        function, method, variable => Camel goHome
        class => Pascal                     MemberService
        folder, file => Kebab                     
        css => Snake                        button_style
    -Error handling
  
 */

/* Request:
    Traditional Api
    Rest Api
    GraphQL Api
*/

/**
 request join
 self destroy
 */

/** Frontend Development:
        Traditional FD => SSR => EJS
        Modern FD      => SPA => REACT
  */

/**Cookies:
    request join
    self destroy
 */

/** Validation:
        Frontend validation
        Backend validation
        Database validation
 */

// I-TASK:

// Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

// function majorityElement(data: number[]) {
//     let maxCount: number = 0;
//     let index: number = 0;
//     for(let i = 0; i < data.length; i++){
//         let count: number = 0;
//         for(let j = 0; j < data.length; j++){
//             if(data[i] == data[j]){
//                 count++;
//             }
//         }
//         if(count > maxCount){
//             maxCount = count;
//             index = i;
//         }
//     }
//     console.log(data[index]);
// }

// majorityElement([1,2,3,4,5,4,3,4]);

// H2-TASK:

// Shunday function tuzing, unga string argument pass bolsin.
// Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

// function getDigits(data: string) {
//     let result: string[] = [];
//     const dataArray = data.split("");
//     dataArray.filter((ele) =>{
//         if(!isNaN(+ele)) {
//             result.push(ele);
//         }
//     })
//     let finalResult: string = result.join("");
//     console.log(finalResult);
// }
// getDigits("m14i1t");

// H-TASK:

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// function getPositive(listOfNumbers: number[]){
//     const newList = listOfNumbers.map((ele, index) => {
//         return ele > 0 ? ele : null;
//     });
//     const result = newList.join('');
//     console.log(result);

// }

// getPositive([1, -4, 2]);

// G-TASK:

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
// let listNumbers: Array<number> = [];
// function getHighestIndex(listNumbers: number[]) {
//     let max: number = 0;

//     let i: number = 0
//     for(i = 0; i < listNumbers.length; i++) {
//         if(listNumbers[i] > max){
//             max = listNumbers[i];
//         }
//     }
//     console.log(listNumbers.indexOf(max));
// }
// getHighestIndex([5, 21, 12, 21, 8]);
