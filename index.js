const slider = document.getElementById("inputS");
const sliderValue = document.getElementById("value");

slider.addEventListener("input", function () {
    sliderValue.textContent = slider.value;
});

document.getElementById("generateB").addEventListener("click", function () {
    const length = parseInt(document.getElementById("value").value);
    const includeUpper = document.getElementById("upper").checked;
    const includeLower = document.getElementById("lower").checked;
    const includeSymbols = document.getElementById("symbols").checked;
    const includeNumbers = document.getElementById("numbers").checked;

    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const symbolChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/";
    const numberChars = "0123456789";

    let allChars = "";

    if (includeUpper) {
        allChars += upperChars;
    }

    if (includeLower) {
        allChars += lowerChars;
    }

    if (includeSymbols) {
        allChars += symbolChars;
    }

    if (includeNumbers) {
        allChars += numberChars;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    document.getElementById("Password").value = password;

});

document.getElementById("buttonn").addEventListener("click", function() {
    var inputValue = document.getElementById("Password");
    const range = document.createRange();
    range.selectNode(inputValue);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // Execute the copy command
     document.execCommand('copy');

    // Deselect the text
    window.getSelection().removeAllRanges();
});
