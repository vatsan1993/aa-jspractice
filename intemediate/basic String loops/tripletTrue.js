// Write a function tripletTrue that accepts a string as an argument. The function should return a boolean indicating whether or not the the string contains three of the same character consecutively.
// Your code here
function tripletTrue(str){
    let count= 1;
    let j=0;
    for (let i= 1; i < str.length; i++ ){
        if(str[i]== str[j]){
            count++;
        }else{
            j= i;
            count= 1;
        }
        if(count==3){
            return true;
        }
    }
    return false;
}


console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false
