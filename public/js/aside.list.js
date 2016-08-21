$(function(){
    $(".aside-layer").bind("click", function(){
       hideAsideMenu();
    });
    $(".aside-fixed-nav .menu-btn").bind("click", function() {
        showAsideMenu();
    });
    $(".title-list .title-item").bind("click", function() {
        $(".title-list .selected").removeClass("selected");
        $(this).addClass("selected");
        setTimeout(hideAsideMenu, 1000);;
    });
});

function showAsideMenu(){
    $(".aside-layer").addClass("aside-layer-show");
    $(".aside-menu").addClass("aside-menu-show");
}
function hideAsideMenu(){
    $(".aside-layer").removeClass("aside-layer-show");
    $(".aside-menu").removeClass("aside-menu-show");
}