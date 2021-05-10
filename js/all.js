$(document).ready(function(){
    $('.hamburger').on('click', function(e){
        e.preventDefault();
        $('body').toggleClass('menu-show');
        $(this).find('[data-fa-i2svg]').toggleClass('fa-bars').toggleClass('fa-chevron-down');
    });
});