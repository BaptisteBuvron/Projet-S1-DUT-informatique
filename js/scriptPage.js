function goBack(){
    window.history.back();
}

var menu = false;

function menuToggle(){
    if (menu == false ){
        $('nav').css("transform", "translateX(0%)");
        menu = true;
    }
    else{
        $('nav').css("transform", "translateX(-200%)");
        menu = false;
    }
}


$(document).ready(function (){
    if ($(window).width() < 1000 && menu== false){
        $('nav').css("transform", "translateX(-200%)");

    }
});


window.onresize = function(event) {
    if ($(window).width() >= 1000){
        $('nav').css("transform", "translateX(0%)");
    }
    if ($(window).width() < 1000 && menu== false){
        $('nav').css("transform", "translateX(-200%)");

    }

};

$('nav li a').on('click', function () {
    if ($(window).width() < 1000){
        menu = false;
        $('nav').css("transform", "translateX(-200%)");

    }


});