
$(document).ready(function(){
    
     $('.button-collapse').sideNav({
         menuWidth: 240, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
    
    $('.scrollspy').scrollSpy();
    
    $('.pictures').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1   
    });
});