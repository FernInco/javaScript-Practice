const arr1 = [1, 2, 3, 5, 6, 7, 8, 9, 10];
const arr2 = [];
for (const val of arr1) {
    if (val%2 === 0) {
        arr2.push(val);
    } else {
        continue;
    }
}
console.log(arr2);