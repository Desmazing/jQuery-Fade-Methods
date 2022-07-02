$(document).ready(function(){
    $("#fadeout").click(function(){
        $(".fadeout").fadeOut();
        $(".fadeout").value = "hidden";
    })
})

$(document).ready(function(){
    $("#fadein").click(function(){
        $(".fadein").fadeIn();
        if ($("fadeout").value == "hidden"){
            $(".fadeout").fadeIn(slow);
        }
    })
})