// S-TASK:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2

function missingNumber(arr: number[]){
    const sortArr = arr.sort();
    let missingNumber: number = 0;
    for (let i = 0; i < sortArr.length; i++) {
        if (sortArr[i] !== i + 1){
            missingNumber = i + 1;
        } 
    }
    return missingNumber;
}
const result = missingNumber([3, 0, 1]);//[0, 1, 3]
console.log(result);



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