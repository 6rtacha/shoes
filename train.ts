// I-TASK:

// Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

function majorityElement(data: number[]) {
    let maxCount: number = 0;
    let index: number = 0;
    for(let i = 0; i < data.length; i++){
        let count: number = 0;
        for(let j = 0; j < data.length; j++){
            if(data[i] == data[j]){
                count++;
            }
        }
        if(count > maxCount){
            maxCount = count;
            index = i;
        }
    }
    console.log(data[index]);
}

majorityElement([1,2,3,4,5,4,3,4]);

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