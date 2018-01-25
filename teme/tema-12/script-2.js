function show(message)
{
    $('#container').html($('#container').html() + '<br>' + message);
}

function generateRandomNo()
{
   return Math.floor((Math.random()) * 10);
}

var integers = [];

for (var i = 0; i <= 4; i++) {
    integers.push(generateRandomNo());
}

//varianta 1
var sum = integers.reduce(function (prev, next) { return prev + (next**2); }, 0);

//varianta 2 - folosind arrow function
var sum2 = integers.reduce((prev, next) => prev + (next**2), 0);


show('In vector avem: ' + integers);
show('Suma patratelor este ' + sum);
show('Suma patratelor cu arrow function este ' + sum2);




