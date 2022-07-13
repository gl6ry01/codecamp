console.log("connected")

function isPalindrome(str) {
    var reversed = '';

    for(var char of str) {
        reversed = char + reversed;
    }
    return reversed === str;
}

console.log('racecar')

// console.log(isPalindrome('racecar'));