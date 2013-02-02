
$(document).ready(function(){
	adjust_size_things();

	$(window).resize(adjust_size_things);
});


function adjust_size_things(){

	// resize massive text in relation to window size.
	var maxDimension = Math.max($(window).width(), $(window).height())
	var fontSize = (maxDimension*0.5) + 'px'
	$('.massive-text').css('font-size',fontSize);

	// set what monitor to recommend
	var windowWidth = $(window).width()
	if (windowWidth < 1600) {
		$('.massive-text').attr('href', 'http://www.amazon.com/gp/product/B005BZNDS0/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B005BZNDS0&linkCode=as2&tag=jonathanfiner-20');
	} else if (windowWidth < 2400) {
		$('.massive-text').attr('href', 'http://www.amazon.com/gp/product/B005ZT5C2M/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B005ZT5C2M&linkCode=as2&tag=jonathanfiner-20');
	} else {
		$('.massive-text').attr('href', 'http://www.amazon.com/gp/product/B004KKGF1O/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B004KKGF1O&linkCode=as2&tag=jonathanfiner-20');
	}
};