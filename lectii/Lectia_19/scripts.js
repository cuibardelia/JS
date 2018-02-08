
$(() => {
    createClickEvents();
});

var step = 50;

const createClickEvents = () => {
//    if $(.button).hasClass("left), dar mai elegant cu data-dir
$('.up, .left, .down, .right').click(function() {
    let direction = $(this).data('direction');
    moveSquare(direction);
});

};

const moveSquare = direction => {
    switch (direction) {
        case 'up':
            console.log(direction);
            moveUp();
            break;
        case 'left':
            moveLeft();
            break;
        case 'right':
            moveRight();
            break;
        case 'down':
            moveDown();
            break;
        default:
            break;
    }
};

const moveUp = () => {
    let currentTop = parseInt($('.square').css('top'));
    $('.square').css({
        top: currentTop - step + 'px'
    });
}
const moveDown = () => {
    let currentTop = parseInt($('.square').css('top'));
    $('.square').css({
        top: currentTop + step + 'px'
    });
}

const moveLeft = () => {
    let currentLeft = parseInt($('.square').css('left'));
    $('.square').css({
        left: currentLeft - step + 'px'
    });
}
const moveRight = () => {
    let currentLeft = parseInt($('.square').css('left'));
    $('.square').css({
        left: currentLeft + step + 'px'
    });
}
