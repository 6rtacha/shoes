// M-TASK: 

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin
//  va array ichidagi har bir raqam uchun raqamni ozi
//  va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, 
// hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

function getSquareNumbers(param: number[]){
    const result = param.map((ele) => {
        return {
            number: ele,
            square: ele * ele
        }
    });
    console.log(result);
}

getSquareNumbers([1, 2, 3]);

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