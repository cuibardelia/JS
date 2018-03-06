$(() => {

});

var $inputText = $('input[type="text"]');
var $inputButton = $('input[type="button"]');


console.log($inputText);
console.log($inputButton);

const random = (min, max) => {
    return Math.floor(Math.random() * (max-min) + min);
};

$inputButton.click(function() {
    var currentValue = parseInt($inputText.val());
    console.log(currentValue);
    if (isNaN(currentValue)) {
        alert("Please choose a number!");
        return;
    }
    displayRandomNumbers(currentValue);
});

const displayRandomNumbers = (currentValue) => {
    for (let i = 0; i < currentValue; i++) {
        currentrandom = random(0, currentValue);
        console.log(currentrandom);
    }
};




