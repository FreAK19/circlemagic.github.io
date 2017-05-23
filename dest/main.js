/**
 * Created by Andrew on 22.05.2017.
 */

    $(".btn").on("click", function (event) {
		event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 60}, 1500);
    });