// Write a function leastCommonMultiple(num1, num2) that accepts two numbers as arguments. The functions should return the smallest number that is divisible by both num1 and num2.

// your code here
function leastCommonMultiple(num1, num2){

    // If a = 0 or b = 0, then return with lcm(a, b) = 0, else go to step 2.
    // Calculate absolute values of the two numbers.
    // Initialize lcm as the higher of the two values computed in step 2.
    // If lcm is divisible by the lower absolute value, then return.
    // Increment lcm by the higher absolute value among the two and go to step 4.
    if(num1==0 || num2==0)
        return 0;
    let lcm;
    if(num1>num2)
        lcm= num1;
    else
        lcm= num2;
    if(lcm% num1==0 && lcm%num2==0)
        return lcm
    for(;lcm<= num1*num2; lcm++){
        if(lcm% num1==0 && lcm%num2==0)
            return lcm
    }
}






console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10
