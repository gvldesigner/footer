console.log('hey class!');

$(document).ready(function () {

	$('.anabtns').click(function() {


		//removes the css class
		$('.anabtns').removeClass('active');

		//add the class back to the active btn
		$(this).addClass('active');

		// store clicked tab's id
		var id = $(this).attr('id');

		//activates the tab-data
		$('.tab-data').removeClass('active');

		//find the element whose class is the same as the tabs id
		// and add the active class
		$('.' + id).addClass('active');

	})

})


$('.slider').change(function (){
	console.log($(this).val())

	var sliderValue = $(this).val()

	$('h2').css('font-size', sliderValue / 2 + 'px');


	//slider value above 40 or slider value less than 20
	if (sliderValue > 40 || sliderValue < 20) {


		$('h2').css('font-family', 'serif');

	} else {
		$('h2').css('font-family', 'sans-serif');
	}

})

});




