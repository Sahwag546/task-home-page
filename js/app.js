
$('.show-three').slick({
    dots: true,
    arrow: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    

    responsive: [

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 786,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

});