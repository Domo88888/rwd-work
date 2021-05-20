$(document).ready(function(){
    $('.hamburger').on('click', function(e){
        e.preventDefault();
        $('body').toggleClass('menu-show');
        $(this).find('[data-fa-i2svg]').toggleClass('fa-bars').toggleClass('fa-chevron-down');
    });
    $('.cart-inner-l ul li a').on('click', function(e){
        e.preventDefault();
        $(this).parent().siblings().find('a').removeClass('clicked');
        $(this).toggleClass('clicked');
    })
    $('.fa-heart').on('click', function(e){
        if($(this).attr('data-prefix') === 'far'){
            $(this).attr('data-prefix', 'fas');
            console.log("a");
        }else if($(this).attr('data-prefix') === 'fas'){
            $(this).attr('data-prefix', 'far');
            console.log("XX");
        }
    })
});