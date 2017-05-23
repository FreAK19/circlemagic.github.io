/**
 * Created by Andrew on 22.05.2017.
 */

    $(".btn").on("click", function (event) {
		let top = window.innerHeight;
		console.log(top);
        $('body,html').animate({scrollTop: top + 20}, 1500);
    });