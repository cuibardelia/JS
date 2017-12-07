$(function () {

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

    $showFirstNumberBtn.click(function (e) {
        var firstNumber = [];
        firstNumber[0] = $realFirst.val();
        firstNumber[1] = $imaginaryFirst.val();

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
        var secondNumber = [];
        secondNumber[0] = $realSecond.val();
        secondNumber[1] = $imaginarySecond.val();

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

    });

});