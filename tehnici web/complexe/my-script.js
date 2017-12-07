$(function () {

    var $plusBtn = $("#plus-btn");
    var $subtractBtn = $("#subtract-btn");
    var $multiplyBtn = $("#multiply-btn");
    var $divideBtn = $("#divide-btn");
    var realFirst = $("#real-first").val();
    var imaginaryFirst = $("#imaginary-first").val();
    var realSecond = $("#real-second").val();
    var imaginarySecond = $("#imaginary-second").val();

    console.log($plusBtn);
    console.log($subtractBtn);
    console.log($multiplyBtn);
    console.log($divideBtn);
    console.log(realFirst);

    $("#real-first").change(function () {
        console.log($(this).val());
    });


    $plusBtn.click(function () {

    });

});