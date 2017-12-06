
function show(message)
{
    $('#container').html($('#container').html() + '<br>' + message);
}

function addMatrices(a, b)
{

    var nrLinesA = a.length;
    var nrLinesB = b.length;
    var nrColumnsA = a[0].length;
    var nrColumnsB = b[0].length;
    console.log('linii a: ' + nrLinesA);
    console.log('linii b: ' + nrLinesB);
    console.log('coloane a: ' + nrColumnsA);
    console.log('coloane b: ' + nrColumnsB);


    if (nrLinesA != nrLinesB || nrColumnsA != nrColumnsB) {
        return 'Nu se poate face adunarea. Pentru operatia de adunare, matricile trebuie sa aiba același număr de linii și același număr de coloane';
    }


    var result = [];

    for (var i = 0; i < nrLinesA; i++) {

        result[i] = [];

        for (var j = 0; j < nrColumnsA; j++) {
            result[i][j] = a[i][j] + b[i][j];
        }

        console.table(result);
    }

    return result;

}

function multiplyMatrices(a, b) {

    var nrLinesA = a.length;
    var nrLinesB = b.length;
    var nrColumnsA = a[0].length;
    var nrColumnsB = b[0].length;
    console.log('linii a: ' + nrLinesA);
    console.log('linii b: ' + nrLinesB);
    console.log('coloane a: ' + nrColumnsA);
    console.log('coloane b: ' + nrColumnsB);

    if (nrColumnsA != nrLinesB) {
        return 'Nu se poate face inmultirea. Pentru operatia de inmultire, numărul de coloane ale lui A trebuie sa fie egal cu numărul de linii ale lui B';
    }

    var result = [];

    for (var i = 0; i < nrLinesA; i++) {

        result[i] = [];

        for (var j = 0; j < nrColumnsB; j++) {

            result[i][j] = 0;

            for (var k = 0; k < nrColumnsB; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }

        console.table(result);
    }

    return result;

}

var a = [[1, 2], [-3, 15]];
var b = [[-20, 33.5], [4, -17.2]];

console.table(a);
console.table(b);


var newMatrix = multiplyMatrices(a, b);
if (typeof newMatrix == 'string') {
    console.log(newMatrix);
} else {
    console.table(newMatrix);
}









