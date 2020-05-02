$(document).ready(function () {
    $('.carousel[data-type="multi"] .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 3; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });

    $('.menu-icon').click(function(){
        if($(".menu-bar").hasClass('close-icon')){
          $(".menu-bar").removeClass('close-icon');
          $('.main-menu').removeClass('is-open');
        }
        else{
          $(".menu-bar").addClass('close-icon');
          $('.main-menu').addClass('is-open');
        }
      });
});

