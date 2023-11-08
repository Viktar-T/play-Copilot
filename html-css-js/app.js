/// create a function that takes a string and returns it back to front
function reverseString(str) {
    return str.split('').reverse().join('');
}

// test the function
console.log(reverseString('hello'));