const container = $('.container');

const random = (min, max) => {
    return Math.floor(Math.random() * (max-min) + min);
};

const randomPosition = () => {
    let randomTop = random(0, 350);
    let randomLeft = random(0, 350);
    $('.item').css({
        top: randomTop + 'px',
        left: randomLeft + 'px'
    });
};

const randomColor = () => {
    let randomR = random(0, 255);
    let randomG = random(0, 255);
    let randomB = random(0, 255);
    $('.item i').css({
        color: `rgb(${randomR}, ${randomG}, ${randomB})`
    });
};

const randomSize = () => {
    let randomFontSize = random(0, 50);
    $('.item i').css({
        fontSize: randomFontSize + 'px'
    });
};

$('.position').click(function() {
    randomPosition();
});
$('.color').click(function() {
    randomColor();
});
$('.size').click(function() {
    randomSize();
});