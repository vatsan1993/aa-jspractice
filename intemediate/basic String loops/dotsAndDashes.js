// Write a function moreDotLessDash that accepts a string as an argument. The function should return a boolean indicating whether or not the string contains more dots (.) than dashes (-).
// Your code here
function moreDotLessDash (str){
    // create dotCount and dashCount
    // loop through the string and
        // if character is -
            // increase dashCount
        // if character is .
            // increate dotCount
    // check and return
    let dotCount= 0;
    let dashCount= 0;
    for(let i=0; i< str.length; i++){
           if(str[i]== '.'){
               dotCount++;
           }
           if(str[i]== '-'){
               dashCount++;
           }
    }
    return dotCount> dashCount;
}


console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false
