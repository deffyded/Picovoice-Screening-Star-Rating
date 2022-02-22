var rating;
// var stars;
$(function () {
	rating = 0; // get current user rating of product not implemented
	$(".star")
		.each(function () {
			if (parseInt($(this).attr("rating")) <= rating) {
				$(this).addClass("selected");
			}
		})
		.click(function () {
			rating = parseInt($(this).attr("rating"));
			$(".star").each(function () {
				if (parseInt($(this).attr("rating")) <= rating) {
					$(this).addClass("selected");
					$(this).removeClass("hover");
				} else {
					$(this).removeClass("selected");
				}
			});
			$.ajax({ // post rating to web server
				type: "POST",
				url: "", // web server url 
				data: { "UUID": 0, "rating": rating, "userId": 0 }
			});
		})
		.mouseleave(function () {
			$(".star").removeClass("hover");
		})
		.mouseenter(function () {
			rating = parseInt($(this).attr("rating"));
			$(".star").each(function () {
				if (parseInt($(this).attr("rating")) <= rating) {
					$(this).addClass("hover");
				}
			});
		});
});