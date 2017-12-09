$(function () {

    //INITIALIZARE OBIECTE JQUERY
    var $plusBtn = $("#plus-btn");
    var $subtractBtn = $("#subtract-btn");
    var $multiplyBtn = $("#multiply-btn");
    var $divideBtn = $("#divide-btn");
    var $showFirstNumberBtn = $("#show-first-number");
    var $showSecondNumberBtn = $("#show-second-number");

    var $realFirst = $("#real-first");
    var $imaginaryFirst = $("#imaginary-first");
    var $realSecond = $("#real-second");
    var $imaginarySecond = $("#imaginary-second");

    var $equationDiv = $('#equation-div');
    var $resultDiv = $('#result');



    // FUNCTII MATEMATICE:
    function addComplexnumbers(a, b) {
        return [a[0] + b[0], a[1] + b[1]];
    }

    function subtractComplexnumbers(a, b) {
        return [a[0] - b[0], a[1] - b[1]];
    }

    function multiplyComplexnumbers(a, b) {
        return [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
    }

    // function divideComplexnumbers(a, b) {
    //     var result = [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
    // }

    //FUNCTII PRELUCRARE DATE:

    function getComplexNumber(number)
    {
        var complexNumber = '';

        //eliminam cazurile in care partea reala e 0
        if (number[0] == '0') {
            if (number[1] == '0') {
                return '0';
            } else if (number[1] == '1') {
                return 'i';
            } else if (number[1] == '-1') {
                return '-i';
            } else return number[1] + 'i';
        }

        //pentru cazurile in care partea reala e diferita de 0 construim treptat numarul complex
        complexNumber += number[0];

        if (number[1] == '0') {
            return complexNumber;
        }
        if (number[1] == '1') {
            complexNumber += ' + i';
            return complexNumber;
        }
        if (number[1] == '-1') {
            complexNumber += ' - i';
            return complexNumber;
        }
        if (number[1] < 0) {
            complexNumber += number[1] + 'i';
        } else {
            complexNumber += ' + ' + number[1] + 'i';
        }

        return complexNumber;

    }


    function show(message) {
            $('#result').html("REZULTAT: " + message);
        }


    //EVENT HANDLERS:

    $showFirstNumberBtn.click(function (e) {

        var firstNumber = [$realFirst.val(), $imaginaryFirst.val()];

        if (firstNumber[0] == '' || firstNumber[1] == '') {
            $equationDiv.html('Adaugati valori pentru ambele campuri ale numarului!');
            e.preventDefault();
            return;
        }
        var complexNumberAsString = getComplexNumber(firstNumber);
        $equationDiv.html(complexNumberAsString);
        e.preventDefault();
    });

    $showSecondNumberBtn.click(function (e) {

        var secondNumber = [$realSecond.val(), $imaginarySecond.val()];

        if (secondNumber[0] == '' || secondNumber[1] == '') {
            $equationDiv.html('Adaugati valori pentru ambele campuri ale numarului!');
            e.preventDefault();
            return;
        }
        var complexNumberAsString = getComplexNumber(secondNumber);
        $equationDiv.html(complexNumberAsString);
        e.preventDefault();
    });

    $plusBtn.click(function () {

        var firstNumber = [parseInt($realFirst.val()), parseInt($imaginaryFirst.val())];
        var secondNumber = [parseInt($realSecond.val()), parseInt($imaginarySecond.val())];

        var result = addComplexnumbers(firstNumber, secondNumber);

        result.toString();
        var resultAsString = getComplexNumber(result);

        var firstcomplexNumberAsString = getComplexNumber(firstNumber);
        var secondcomplexNumberAsString = getComplexNumber(secondNumber);
        $equationDiv.html('(' + firstcomplexNumberAsString + ') + (' + secondcomplexNumberAsString + ')');
        show(resultAsString);

    });

    $subtractBtn.click(function () {

        var firstNumber = [parseInt($realFirst.val()), parseInt($imaginaryFirst.val())];
        var secondNumber = [parseInt($realSecond.val()), parseInt($imaginarySecond.val())];

        var result = subtractComplexnumbers(firstNumber, secondNumber);

        result.toString();
        var resultAsString = getComplexNumber(result);

        var firstcomplexNumberAsString = getComplexNumber(firstNumber);
        var secondcomplexNumberAsString = getComplexNumber(secondNumber);
        $equationDiv.html('(' + firstcomplexNumberAsString + ') - (' + secondcomplexNumberAsString + ')');
        show(resultAsString);

    });

    $multiplyBtn.click(function () {

        var firstNumber = [parseInt($realFirst.val()), parseInt($imaginaryFirst.val())];
        var secondNumber = [parseInt($realSecond.val()), parseInt($imaginarySecond.val())];

        var result = multiplyComplexnumbers(firstNumber, secondNumber);

        result.toString();
        var resultAsString = getComplexNumber(result);

        var firstcomplexNumberAsString = getComplexNumber(firstNumber);
        var secondcomplexNumberAsString = getComplexNumber(secondNumber);
        $equationDiv.html('(' + firstcomplexNumberAsString + ') * (' + secondcomplexNumberAsString + ')');
        show(resultAsString);

    });



});