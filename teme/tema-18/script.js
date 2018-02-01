$(function() {
    renderKeyboard();   
    createKeyEvents();
});

var $display = $('.display');
var $key = $('.key'); // nu e recunoscuta in functie
var $keyboard = $('.keyboard');

function renderKeyboard() {
    console.log('Intarzie putin randarea tastaturii. E ok?');
    for (let index = 0; index < 10; index++) {
        $keyboard.append('<div class="key">'+ index +'</div>');     
    }
    for (let index = 0; index < 26; index++) {
        $keyboard.append('<div class="key">'+ String.fromCharCode(65+index) +'</div>');    
        
    }
    $keyboard.append('<div class="key large"></div><div class="key large">&larr;</div>');  
}

function createKeyEvents() {
    // ce tare e functia :)
    $('.key').map((index, element) => {
        $(element).click(function() {
            keyClicked($(this));
        });
    });
}

function keyClicked(sender) {      
    let currentChar = sender.text();    
    if (currentChar === '') {
        appendToDisplay('&nbsp;');
    } else if (currentChar.charCodeAt() === 8592) {        
        deleteLastChar();
    } else {
        appendToDisplay(currentChar);
    }  
}

function appendToDisplay(char) {
    $display.append(char);
}

function deleteLastChar() {
    let currentText = $display.text();
    let newText = currentText.substring(0, currentText.length - 1);
    $display.text(newText);
}

 