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



window.onresize = function(event) {
    if ($(window).width() >= 1000){
        $('nav').css("transform", "translateX(0%)");
        menu = true;
    }

};