var resultEl = document.getElementById('result');
var lengthEl = document.getElementById('length');
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var generateEl = document.getElementById('generate');
var clipboardEl = document.getElementById('clipboard');

var availableLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var availableUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Z'];
var availableNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var availableSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '=', '<', '>', '/'];

function randomLower() {
    var lower = "abcdefghijklmnopqrstuvwxyz";
    return lower[Math.floor(Math.random() * lower.length)];

}
// console.log(randomLower())


function randomUpper() {
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return upper[Math.floor(Math.random() * upper.length)];
}
// console.log(randomUpper())

function randomNumber() {
    var number = '1234567890';
    return number[Math.floor(Math.random() * number.length)];
}


function randomSymbol() {
    var symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}


function passwordReqs() {
    var lengthNum = lengthEl.value;

    if (!uppercaseEl.checked &&
        !lowercaseEl.checked &&
        !numbersEl.checked &&
        !symbolsEl.checked) {
        alert("your password needs to have a character type")
        return;
    } else {
        alert("Random Password Time!")
    }
    var passReqsObj = {
        length: parseInt(lengthNum),
        uppercase: uppercaseEl,
        lowercase: lowercaseEl,
        numbers: numbersEl,
        symbols: symbolsEl
    };
    console.log(passReqsObj.length)
    return passReqsObj;
}
// console.log(passwordReqs())

function randomChar(array) {
    var i = Math.floor(Math.random() * array.length);
    var char = array[i];
    return char;
}

function createPassword() {
    var requirements = passwordReqs();
    console.log("password", passwordReqs.length);

    // requirements.length = passwordReqs.length
    console.log("requirements", requirements.length);

    const finalPassword = [];
    var possibleChars = [];
    var definiteChars = [];

    if (requirements.lowercase.checked) {
        possibleChars = possibleChars.concat(availableLowerCase);
        // definiteChars.push(randomLower());

    } else {
        console.log("lowercase reqs statement faulty")
    }
    // console.log(requirements.lowercase)
    // console.log(availableLowerCase)
    // console.log(lowercaseEl.checked)
    // console.log(possibleChars)
    // console.log(definiteChars)
    if (requirements.uppercase.checked) {
        possibleChars = possibleChars.concat(availableUpperCase);
        // definiteChars.push(randomUpper());
    } else {
        console.log("uppercase reqs statement faulty")
    }
    // console.log(uppercaseEl.checked)
    if (requirements.numbers.checked) {
        possibleChars = possibleChars.concat(availableNumbers);
        // definiteChars.push(randomNumber());
    } else {
        console.log("numbers reqs statement faulty")
    }
    // console.log(numbersEl.checked)
    if (requirements.symbols.checked) {
        possibleChars = possibleChars.concat(availableSymbols);
        // definiteChars.push(randomSymbol())
    }
    else {
        console.log("symbols reqs statement faulty")
    }
    // console.log(symbolsEl.checked)
    for (var i = 0; i < requirements.length; i++) {
        var randChar = randomChar(possibleChars);
        definiteChars.push(randChar);
    }

    for (var i = 0; i < definiteChars.length; i++) {
        finalPassword[i] = definiteChars[i]
    }

    console.log(definiteChars.length)
    console.log(passwordReqs.length)
    // console.log(possibleChars)
    // console.log(finalPassword)

    return finalPassword.join("");

}


function printPass() {
    var thePass = createPassword();
    resultEl.innerHTML = thePass;
    // console.log(thePass)

}

function clipboard() {
    var copier = document.getElementsByClassName("cop").value
    copier.select();
    copier.setSelectionRange(8, 128)
    document.execCommand("copy");
    alert("Copied the text: " + copier.value);
}

console.log(printPass)

generateEl.addEventListener("click", printPass)
