
function show(message)
{
    $('#container').html($('#container').html() + '<br>' + message);
}

function getX(a, b, c)
{
    var result = [];
    var delta = Math.pow(b, 2) - 4 * a * c;
    console.log(delta);
    if (delta < 0) {
        return "Nu are solutii reale";
    }
    console.log(-b + Math.sqrt(delta));
    result.push((-b + Math.sqrt(delta)) / (2 * a));
    result.push((-b - Math.sqrt(delta)) / (2 * a));
    return result;
}



var result = getX(-3, 10, -3);

show(result);










