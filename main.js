/* ESTO ES SOLO PARA ACTIVAR Y DESACTIVAR BURGUER */

$(document).ready(function(){
    $(".list-mobile").click(function(){
        
        var ulmobile = $(".ul-mobile");
        
        if(ulmobile.css('display')=='none'){
            ulmobile.fadeIn(); 
        }else{
            ulmobile.fadeOut();
        }
       
    });
    $(".li-mobile").mouseover(function(){
       $(this).css("background", "#D4E617");
       $(this).css("color", "black"); 
    });
    $(".li-mobile").mouseout(function(){
       $(this).css("background", "#212F3D");
       $(this).css("color", "white"); 
    });
});