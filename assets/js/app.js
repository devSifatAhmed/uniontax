$(document).ready(function(){
    $('.top-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        speed: 1500,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    $(".nav-btn").click(function(){
        $(".main-menu").slideToggle();
    })
});