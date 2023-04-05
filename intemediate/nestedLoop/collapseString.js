// Write a function sameCharCollapse that takes in a string and returns a collapsed
// version of the string. To collapse the string, we repeatedly delete 2 adjacent
// characters that are the same until there are no such adjacent characters.
// If there are multiple pairs that can be collapsed, delete the leftmost pair.
// For example, we take the following steps to collapse
// "zzzxaaxy": zzzxaaxy -> zxaaxy -> zxxy -

function sameCharCollapse(str) {
    // your code here
    for(let j =0; j< str.length; j++){
        for(let i = 0; i< str.length-1; i++){
            if(str[i] === str[i+1]){
                str = str.slice(0, i) + str.slice(i+2);
            }

        }
    }

    return str;
}

console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
