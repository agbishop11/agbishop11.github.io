//Preloader
$(window).on("load", function () {
    $("#loading").delay(500).fadeOut('slow');
    $("#curr-sts").delay(100).fadeOut();
});


//Nav Bar

$(function () {
    
    $(window).scroll(function() {
        
        if( $(window).scrollTop() > 200 ) {
            
            $("nav").addClass("nav-background");
            
            $(".navbar-brand img").attr("src", "Assets/IMG/grey-matter-images/Lotus_1.png")
        } else {
            
            $("nav").removeClass("nav-background");
            
            $(".navbar-brand img").attr("src", "Assets/IMG/grey-matter-images/Lotus_light.png")
        }
        
    })
    
})

/* Responsive Tabs */
$(function () {

    $("#services-books").responsiveTabs({
        animation: 'slide',

    });

});

/*Work Section*/

$(window).on("load", function () {

    $("#animation-container").isotope({
        
    });

    $(".iso-fil").on("click", "button", function () {


        let selection = $(this).attr("data-filter");

        $("#animation-container").isotope({
            filter: selection
        });


        $(".iso-fil").find(".active").removeClass("active");

        $(this).addClass('active');


    });

});


$(function () {

    $("#work-container").magnificPopup({
        delegate: "a",
        type: "image"

    });

});