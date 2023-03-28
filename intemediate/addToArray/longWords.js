// Write a function longWords(words) that takes in an array of words. The function should return an array containing only the words that are longer than 5 characters.

let longWords = function(arr){
    let newArr = [];
    for( let i = 0; i < arr.length; i++){
        let val = arr[i]
        if(val.length > 5) {
            newArr.push( val );
        }
    }
    return newArr;
}
console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]
