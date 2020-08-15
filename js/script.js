$(document).ready(function(){

    $('#slides').superslides({

        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed",{
        strings: ["Software Engineer", "Lehman College","Student"],
        typeSpeed: 70,
        loop: true,
        staratDelay: 1000,
        showCursor: false

    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    

    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;

    $(window).scroll(function(){
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size:152,
                onStep: function(from, to, percent) {
                    $(this.el).find('percent').text(Math.round(percent));
                }
            });
        }

        if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            $(".counter").each(function(){
                var element = $(this);
                var endVal = parseInt(element.text());
        
                element.countup(endVal);
        
            });
            countUpFinished = true;
        }
    });
    
});