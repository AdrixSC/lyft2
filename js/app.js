//Funciones para direccionar botones a las otras views
$("#btn-sing-up").click(function() {
    document.location.href = "view-phone.html";
});

$("#btn-next").click(function() {
    document.location.href = "verify-phone.html";
});

$("#btn-next-2").click(function() {
    document.location.href = "form.html";
});

$("#btn-next-3").click(function() {
    document.location.href = "registry.html";
});



//Llamando a nuestros elementos de html que usaremos
var $phoneInput = $("#phone-input");
var $buttonNext = $("#btn-next");
var $buttonResend = $(".btn-resend");
var $drop = $(".dropdown");
var $codePhone = $("#codePhone");
var $phoneInput = $("#phone-input");
var $firstName = $("#first-name");
var $lastName = $("#last-name");
var $email = $("#email");
var $checkbox = $(".form-check-input");


//Funciones para validar que el usuario ingrese datos correctos para activar el botón next
var loadPage = function() {
    $(".dropdown").submit(addPhone);
    $("#codePhone").submit(addCode);
    $("#first-name").submit(addName);
    $("#last-name").submit(addName);
    $("#email").submit(addName);

    $phoneInput.keyup(validatePhone);
    $codePhone.keyup(validatePhone);
    $firstName.keyup(validatePhone);
    $lastName.keyup(validatePhone);
    $email.keyup(validatePhone);

};

var validatePhone = function() {
    if ($(this).val().trim().length > 0) {
        $(".btn-next").attr("disabled", false);
    } else {
        $(".btn-next").attr("disabled", true);
    }
};

var addPhone = function(e) {
    e.preventDefault();
    $phoneInput.val();
    $drop[0].reset();
};

var addCode = function(e) {
    e.preventDefault();
    if ($codePhone.val() == $phoneInput.val()) {
        $codePhone[0].reset();
    }
};

var addName = function(e) {
    e.preventDefault();
    $firstName[0].reset();
    $lastName[0].reset();
};

var addEmail = function(e) {
    e.preventDefault();
    $email[0].reset();
};

//Funciones para generar código random

var code = [];

function random() {
    var rdm = Math.floor(Math.random() * 10);
    code.push(rdm);
    return rdm;
}

function codeRandom() {
    var threeNumber = "";
    for (var i = 0; i < 3; i++) {
        threeNumber += random();
    }
    var codePhone = alert("Lab-" + threeNumber);
}
$buttonNext.click(codeRandom);
$buttonResend.click(codeRandom);

$(document).ready(loadPage);