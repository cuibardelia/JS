
function show(message) {
    $('#container').html($('#container').html() + '<br>' + message);
}

function generateRandomNo() {
    return Math.floor((Math.random()) * 10);
}

var numbers = [];

for (var i = 0; i <= 5; i++) {
    numbers.push(generateRandomNo());
}

var newNumbers = integers.map(number => (number%2 == 0) ? number * 2 : number ** 2 );

show('Array initial: ' + integers);
show('Array prelucrat conform cerintelor: ' + newNumbers);






