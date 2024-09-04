// H-TASK: 

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

function getPositive(listOfNumbers: number[]){
    const newList = listOfNumbers.map((ele, index) => {
        return ele > 0 ? ele : null;
    });
    const result = newList.join('');
    console.log(result);
    
}

getPositive([1, -4, 2]);

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