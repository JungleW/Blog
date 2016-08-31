var aside;
var aside_top;
var aside_left;
$(function(){
    aside = $(".aside-left");
    aside_top = aside.offset().top;
    aside_left = aside.offset().left;
    window.onscroll = function(){ 
        showToTopBtn();
        showAsideLeft();
    }
    $("#to_top_btn").bind("click", function(){
        $('html, body').animate({scrollTop: '0px'}, "fast", "linear",
            function(){
            
            }
        );
    });
    
});
function showToTopBtn(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var btn = document.getElementById("to_top_btn");
    if(t > 100){
        btn.style.opacity = 1;
    }else{
        btn.style.opacity = 0;
    }
}
function showAsideLeft(){
    if( aside_top - $(document).scrollTop() < 20){
        aside.css("position", "fixed"); 
        aside.css("top", "20px");
        aside.css("left", aside_left);
    }else{
        aside.css("position", "absolute"); 
        aside.css("top", 0);
        aside.css("left", "0px");
    }
    
}
