function show(message)
{
    $('#container').html($('#container').html() + '<br>' + message);
}

function capitalizeFirstLetter(word)
{
    return word.substring(0, 1).toUpperCase() + word.substring(1);
}

var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';

var words = text.split(' ');
wordsLength = words.length;
var capitalizedWords = [];

for (var i = 0; i < wordsLength; i++) {
    capitalizedWords.push(capitalizeFirstLetter(words[i]));
}

var capitalizedText = capitalizedWords.join(' ');

show('<strong>Textul initial:</strong> <br /> ' + text);
show('<strong>Textul modificat:</strong> <br /> ' + capitalizedText);





