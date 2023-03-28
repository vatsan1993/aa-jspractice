// Define a function fizzBuzz(max) that takes a number and prints every number from 0 to max (not inclusive) that is divisible by either 3 or 5, but not both.

function fizzBuzz(high){
    for(let i=1; i< high; i++)   {
        if(i%3===0 && i%5!==0){
            console.log(i);
        }
        if(i%5===0 && i%3!==0){
            console.log(i);
        }
    }
}
// Examples:

fizzBuzz(20); // prints out:
// 3
// 5
// 6
// 9
// 10
// 12
// 18

