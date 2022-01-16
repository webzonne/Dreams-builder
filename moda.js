 $(document).ready(function(){
       $(".show-contact").click(function(){
         $(".modal-content").fadeIn();
         $(".modal").css("margin-top", "-314px");
           
       });
        $(".equis").click(function(){
          $(".modal-content").fadeOut();  
        });
        $(".content-equis-negra-mobile-contact-us").click(function(){
            $(".modal-content").fadeOut(); 
        });
    });
  