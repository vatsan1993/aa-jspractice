// Write a function alternatingWords that accepts an array of words as an argument. The function should mutate the input array such that the words alternate between fully uppercase or lowercase. The first word should be uppercase.


// Your code here
let alternatingWords= function(array){
    for(let i=0; i< array.length; i++){
        let word= array[i];
        if(i%2==0){
            array[i]= word.toUpperCase();
        }
        else{
            array[i]= word.toLowerCase();
        }
    }
}


let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]
