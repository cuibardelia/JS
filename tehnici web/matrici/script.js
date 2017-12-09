// FUNCTII MATEMATICE:

function addMatrices(a, b)
{
    var nrLinesA = a.length;
    var nrLinesB = b.length;
    var nrColumnsA = a[0].length;
    var nrColumnsB = b[0].length;

    if (nrLinesA != nrLinesB || nrColumnsA != nrColumnsB) {
        return 'Nu se poate face adunarea. Pentru operatia de adunare, matricile trebuie sa aiba același număr de linii și același număr de coloane';
    }
    var result = [];

    for (var i = 0; i < nrLinesA; i++) {
        result[i] = [];
        for (var j = 0; j < nrColumnsA; j++) {
            result[i][j] = a[i][j] + b[i][j];
        }
    }
    return result;
}

function multiplyMatrices(a, b)
{
    var nrLinesA = a.length;
    var nrLinesB = b.length;
    var nrColumnsA = a[0].length;
    var nrColumnsB = b[0].length;

    if (nrColumnsA != nrLinesB) {
        return 'Nu se poate face inmultirea. Pentru operatia de inmultire, numărul de coloane ale lui A trebuie sa fie egal cu numărul de linii ale lui B';
    }
    var result = [];

    for (var i = 0; i < nrLinesA; ++i) {
        result[i] = [];
        for (var j = 0; j < nrColumnsB; ++j) {
            result[i][j] = 0;
            for (var k = 0; k < nrColumnsA; ++k) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
        console.table(result);
    }
    return result;
}


// FUNCTII DE PRELUCRARE DATE DIN/IN DOM:

function getMatrixFromDocument(letter) {

    var lines = document.getElementById("lines-" + letter).value;
    var columns = document.getElementById("columns-" + letter).value;

    var myMatrix = [];

    for (var i = 0; i < lines; i++) {
        myMatrix[i] = [];
        for (var j = 0; j < columns; j++) {
            var currentId = '';
            currentId = letter + i + j;
            myMatrix[i][j] = parseInt(document.getElementById(currentId).value);
        }
    }
    return myMatrix;
}

function validateMatrix(myMatrix) {

    var lines = myMatrix.length;
    var columns = myMatrix[0].length;

    for (var i = 0; i < lines; i++) {
        for (var j = 0; j < columns; j++) {
            if (isNaN(myMatrix[i][j])) {
                return false;
            }
        }
    }
    return true;
}


function generateMatrix(letter)
{

    var lines = document.getElementById("lines-" + letter).value;
    var columns = document.getElementById("columns-" + letter).value;
    var container = document.getElementById("container-" + letter);

    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    for (var i = 0; i < lines; i++) {
        for (var j = 0; j < columns; j++) {
            var input = document.createElement("input");
            input.type = "text";
            input.placeholder = letter.toLowerCase() + "[" + (i + 1) + "][" + (j + 1) + "]";
            input.id = letter + i + j;
            input.className = "smaller-input";
            container.appendChild(input);
        }
        container.appendChild(document.createElement("br"));
    }
}

function generateCInput(lines, columns)
{

    var container = document.getElementById("container-C");

    var input = document.createElement("input");
    input.type = "text";
    input.id = "lines-C";
    input.value = document.getElementById(lines).value;
    container.appendChild(input);

    var input = document.createElement("input");
    input.type = "text";
    input.id = "columns-C";
    input.value = document.getElementById(columns).value;
    container.appendChild(input);
}


function populateMatrix(myMatrix) {

    var lines = myMatrix.length;
    var columns = myMatrix[0].length;

    for (var i = 0; i < lines; i++) {
        for (var j = 0; j < columns; j++) {
            var currentId = 'C' + i + j;
            console.log(currentId);
            document.getElementById(currentId).value = myMatrix[i][j];
        }
    }
    return myMatrix;
}

//EVENT LISTENERS:

//Generare Matrice A
document.getElementById("fill-matrix-A").addEventListener("click", function () {

    generateMatrix('A');
});

//Generare Matrice B
document.getElementById("fill-matrix-B").addEventListener("click", function () {

    generateMatrix('B');
});

//
document.getElementById("plus-btn").addEventListener("click", function () {

    var a = [];
    var b = [];
    a = getMatrixFromDocument('A');
    b = getMatrixFromDocument('B');

    if (validateMatrix(a) == false || validateMatrix(b) == false) {
        alert('Va rugam populati complet ambele matrici cu numere');
        return;
    }

    var result = [];

    result = addMatrices(a, b);

    if (typeof result == 'string') {
       alert(result);
    } else {
        generateCInput('lines-A', 'columns-A');
        generateMatrix('C');
        populateMatrix(result);
        console.table(result);
    }
});

document.getElementById("multiply-btn").addEventListener("click", function () {

    var a = [];
    var b = [];
    a = getMatrixFromDocument('A');
    b = getMatrixFromDocument('B');

    if (validateMatrix(a) == false || validateMatrix(b) == false) {
        alert('Va rugam populati complet ambele matrici cu numere');
        return;
    }

    var result = [];

    result = multiplyMatrices(a, b);

    if (typeof result == 'string') {
        alert(result);
    } else {
        generateCInput('lines-A', 'columns-B');
        generateMatrix('C');
        populateMatrix(result);
        console.table(result);
    }
});



