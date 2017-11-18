$(function () {
    var app = new App;
    app.init(40, 20);
});

function App()
{
    this.width = 5;
    this.height = 5;
    this.x = 0;
    this.y = 0;
    this.steps = 0;
    this.POINT = '<span>@</span>';
}

App.prototype.init = function (width, height) {
    if (typeof width != 'undefined') {
        this.width = width;
    }
    if (typeof height != 'undefined') {
        this.height = height;
    }

    this.createBoard();
    this.setInitialPosition();
    this.createKeyboardEvents();
};

App.prototype.createKeyboardEvents = function () {
    var keyCodes = {
        37: 'moveLeft',
        38: 'moveUp',
        39: 'moveRight',
        40: 'moveDown'
    }
    $(document).keydown((function (event) {
        if (event.keyCode in keyCodes) {
            event.preventDefault();
            event.stopPropagation();
            this[keyCodes[event.keyCode]]();
        }
    }).bind(this));
};

App.prototype.moveLeft = function () {
    this.debug('moving left ...');
    this.move(-1, 0);
};

App.prototype.moveUp = function () {
    this.debug('moving up ...');
    this.move(0, -1);
};

App.prototype.moveRight = function () {
    this.debug('moving right ...');
    this.move(1, 0);
};

App.prototype.moveDown = function () {
    this.debug('moving down ...');
    this.move(0, 1);
};

App.prototype.move = function (deltaX, deltaY) {
    this.setStepsNoByDirection(this.x + deltaX, this.y + deltaY);
    this.debug(this.steps);

    if (!this.isAValidDirection(deltaX, deltaY)) {
        this.message('Wrong way!');
        return;
    }

    for (var i = 0; i < this.steps; i++) {
        this.getCell(this.x + i * deltaX, this.y + i * deltaY).html('');
    }
    this.getCell(this.x + i * deltaX, this.y + i * deltaY).html(this.POINT);
    this.setPosition(this.x + i * deltaX, this.y + i * deltaY);

    if (!this.thereAreValidMoves()) {
        this.message('<span style="color: #F00;">No more moves available!</span>');
    }
};

App.prototype.thereAreValidMoves = function () {
    return this.isAValidDirection();
};

App.prototype.getCell = function (x, y) {
    return $('#container > div:nth-child(' + y + ') > div:nth-child(' + x + ')');
};

App.prototype.message = function (message) {
    $('#messages').append('<div>' + message + '</div>');
    this.scrollToEnd('messages');
};

App.prototype.scrollToEnd = function (elementId) {
    $('#' + elementId).animate({
        scrollTop: $('#' + elementId).prop("scrollHeight") - $('#' + elementId).height()
    }, 0);
}

App.prototype.isAValidDirection = function (deltaX, deltaY) {
    this.debug('x: ' + this.x);
    this.debug('y: ' + this.y);
    this.debug('delta x: ' + deltaX);
    this.debug('delta y: ' + deltaY);
    this.debug('steps ' + this.steps);
    if (this.steps == '') {
        return false;
    }

    return this.x + this.steps * deltaX > 0
        && this.x + this.steps * deltaX <= this.width
        && this.y + this.steps * deltaY > 0
        && this.y + this.steps * deltaY <= this.height
        && this.isUntouchedPath(deltaX, deltaY);
};

App.prototype.isUntouchedPath = function (deltaX, deltaY) {
    for (var i = 0; i < this.steps; i++) {
        if (this.getCell(this.x + i * deltaX, this.y + i * deltaY).html() == '') {
            return false;
        }
    }
    return true;
};

App.prototype.setStepsNoByDirection = function (x, y) {
    this.steps = this.getCell(x, y).html();
};

App.prototype.createBoard = function () {
    $('#container').css({
        'width': this.width * 20 + 'px',
        'height': this.height * 20 + 'px',
    });

    var divRow;
    var randomDigit;

    for (let i = 0; i < this.height; i++) {
        divRow = '';
        for (let j = 0; j < this.width; j++) {
            randomDigit = this.getRandomNumber(1, 10);
            divRow += '<div class="digit-' + randomDigit + '">' + randomDigit + '</div>';
        }
        $('#container').append('<div>' + divRow + '</div>');
    }
};

App.prototype.createDebugWindowIfMissing = function () {
    if (!$('#debug-container').length) {
        $('body').append('<div id="debug-container"></div>')
    }
};

App.prototype.debug = function (message) {
    this.createDebugWindowIfMissing();
    $('#debug-container').append('<div>' + message + '</div>');
    this.scrollToEnd('debug-container');
}

App.prototype.getRandomNumber = function (min, max) {
    return min + Math.trunc(Math.random() * (max - min));
};

App.prototype.setInitialPosition = function () {
    pos = this.getRandomPosition();
    $('#container > div:nth-child(' + pos.y + ') > div:nth-child(' + pos.x + ')').html(this.POINT);
    this.setPosition(pos.x, pos.y);
    this.debug(pos.x);
    this.debug(pos.y);
};

App.prototype.getRandomPosition = function () {
    var marginX = Math.floor(this.width / 4);
    var marginY = Math.floor(this.height / 4);
    return {
        'x': this.getRandomNumber(marginX, this.width - marginX),
        'y': this.getRandomNumber(marginY, this.height - marginY)
    };
};

App.prototype.setPosition = function (x, y) {
    this.x = x;
    this.y = y;
};
