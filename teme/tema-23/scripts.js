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
    $('.display').html('');
    displayRandomNumbers(currentValue);
});

const displayRandomNumbers = (currentValue) => {
    for (let i = 0; i < currentValue; i++) {
        currentRandom = random(0, currentValue);
        console.log(currentRandom);
        $('.display').append(`<p>${currentRandom}</p>`);
        randomSize(i+1);
        randomPosition(i+1);
        randomColor(i+1);        
    }
};

const randomPosition = (order) => {
    const displayWidth = $('.display').width();
    const displayHeight = $('.display').height();    
    let randomTop = random(0, displayHeight - 50);
    let randomLeft = random(0, displayWidth - 50);
    $(`p:nth-child(${order})`).css({
        top: randomTop + 'px',
        left: randomLeft + 'px'
    });
};

const randomColor = (order) => {
    let randomR = random(0, 255);
    let randomG = random(0, 255);
    let randomB = random(0, 255);
    $(`p:nth-child(${order})`).css({
        color: `rgb(${randomR}, ${randomG}, ${randomB})`
    });
};

const randomSize = (order) => {
    let randomFontSize = random(0, 50);
    $(`p:nth-child(${order})`).css({
        fontSize: randomFontSize + 'px'
    });
};

// probleme: numbers overlay
// zoom :-s
// treaba cu displayHeight - 50







