function goBack(){
    window.history.back();
}

var menu = false;

function menuToggle(){
    console.log("test")
    if (menu == false ){
        $('nav').css("transform", "translateX(0%)");
        menu = true;
    }
    else{
        $('nav').css("transform", "translateX(-200%)");
        menu = false;
    }
}

