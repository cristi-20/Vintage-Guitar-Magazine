$('.owl-one').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    nav:false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplay:true,
    slideTransition:'linear',
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:1
        },
        1000:{
            items:3
        }
    }
})



$('.owl-two').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    nav:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText:[ 
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.owl-three').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    nav:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText:[ 
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.owl-modal').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    nav:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText:[ 
    ],
    responsive:{
        0:{
            items:1
        },
        700:{
            items:1
        },
        1000:{
            items:3
        }
    }
})






