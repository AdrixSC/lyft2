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

//Funciones para validar que el usuario ingrese datos correctos para activar el botón next
/*var loadPage = function() {
    //$phoneInput.keyup(validatePhone);
    $("#btn-next").submit(addPhone);
};


var addPhone = function(e) {
    e.preventDefault();
    var phone = $phoneInput.val();
    $("#phoneInput")[0].reset();
};

var validatePhone = function() {
    if ($("#phone-input").val().trim().length > 0) {
        $("#btn-next").prop("disabled", false);
    } else {
        $("#btn-next").prop("disabled", true);
    }
};*/