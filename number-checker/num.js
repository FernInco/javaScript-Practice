
function checkNumber() {
    let data = document.querySelector("input")
    let input = data.value
    console.log(input)
    let result = document.querySelector("p")
    if (isNaN(input)) {
        result.innerText = "Enter a valid number"
        result.style.color = "red"
    }

    if (input % 2 === 0) {
        result.innerText = "The number is even"
        result.style.color = "green"
    }

    if (input % 2 !== 0) {
        result.innerText = "The number is odd"
        result.style.color = "blue"
    }

}