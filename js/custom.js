$('.partner-carousel').owlCarousel({
    nav: true,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    nav: false,
    rewind: true,
    loop: true,
    margin: 10,
    responsiveClass: true,

    responsive: {
        0: {
            items: 2,
            nav: false,
            loop: false
        },
        480: {
            items: 3,
            nav: false,
            loop: false
        },
        576: {
            items: 3,
        },
        768: {
            items: 4,
        },
        992: {
            items: 6,
        }
    }
})

$('.client-review-carousel').owlCarousel({
    nav: true,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    nav: false,
    rewind: true,
    loop: true,
    margin: 30,
    responsiveClass: true,

    responsive: {
        0: {
            items: 1,
            nav: false,
            loop: false
        },
        768: {
            items: 2,
        },
        992: {
            items: 2,
        }
    }
})