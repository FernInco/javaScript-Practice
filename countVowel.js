let a = "Hello World";


/* function countVowels(abc) {
    abc = abc.toLowerCase();
    let count = 0;
    for (let i = 0; i<abc.length; i++) {
    if (abc[i] === 'a' || abc[i] === 'e' || abc[i] === 'i' || abc[i] === 'o' || abc[i] === 'u') {
        count++;
    }
    }
    return count;
}
countVowels(a); */
const b = 'Average Javascript Enjoyer';
const vowels = 'aeiou';
function countVowels(abc) {
    abc = abc.toLowerCase();
    let count = 0;
    for (let i = 0; i < abc.length; i++) {
        if (vowels.includes(abc[i])) {
            count++;
        } else {
            continue;
        }
    }
    return `Total number of vowels in the given string is: ${count}`;
}
console.log(countVowels(b));