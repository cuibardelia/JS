function show(message)
{
    $('#container').html($('#container').html() + '<br>' + message);
}

var elements = ['red', 'green', 'orange', 'blue'];

var elementsLengths = elements.map(item => item.length);


show('Array initial: ' + elements);
show('Array prelucrat conform cerintelor: ' + elementsLengths);




