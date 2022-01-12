$(function() {
    
    /*lightbox functionality*/
    const lightbox = $("#lightbox");
    $(".xicon").on("click", () => {
        lightbox.removeClass("show");
    });
    $(".gallery__img").on("click", function(){
        lightbox.addClass("show");
        const selecimg = $(this);
        const imgdata = selecimg.data("image");
        $(".lightbox__img").attr("src",imgdata); 
    });
    /*mobile nav*/
    $(".mobile-menu__x").on("click", function(){
        $(".mobile-menu").blur();
        
    }); 

    
    
});