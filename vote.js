const a = prompt("Enter your age: ");
if (Number.isNaN(a) || a<0) {
    console.log("Invalid age entered.");
} else if (a>=18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}