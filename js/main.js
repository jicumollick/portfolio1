$(document).ready(function () {



    let $btns = $('.project-area .button-group button');

    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector

        });
    })


    $('.project-area .button-group #btn1').trigger('click');



    $(' .project-area .grid .test-popup-link').magnificPopup({
        type: 'image',

        gallery: { enabled: true }
        // other options
    });

    // Owl Carousel 

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            }
        }
    })


})