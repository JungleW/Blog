$(function(){
    window.onscroll = function(){ 
        showToTopBtn();
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
