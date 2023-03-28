// Write a function uncompress(str) that takes in a "compressed" string as an arg. A compressed string consists of a character immediately followed by the number of times it appears in the "uncompressed" form. The function should return the uncompressed version of the string. See the examples.

// Hint: you can use the built-in Number function should convert a numeric string into the number type. For example. Number("4") // => 4

// You may assume that the number of times will always be an integer between 0 and 9.
// your code here
function uncompress(str){
    let res= '';
    for (let i = 0; i< str.length; i+=2){
        let ch= str[i];
        let num=Number(str[i+1]);
        for (let j= 0; j < num; j++){
            res+=ch;
        }
    }
    return res;
}





console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'
