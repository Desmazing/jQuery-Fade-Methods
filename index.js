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

$(document).ready(function(){
    $("#fadetoggle").click(function(){
        $(".fadetoggle").fadeToggle();
    })
})

$(document).ready(function(){
    $("#fadeto").click(function(){
        $(".fadeto").fadeTo("slow", 0.2);
        $(".fadeto").fadeTo("slow", 1);
    })
})
$(document).ready(function(){
    $("#slided").click(function(){
        $(".slide").slideDown('fast');
    })
})
$(document).ready(function(){
    $(".close").click(function(){
        $(".slide").slideUp('fast');
    })
})
$(document).ready(function(){
    $("#toggle").click(function(){
        $(".slide").slideToggle();
    })
})