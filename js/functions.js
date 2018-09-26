
	$(document).ready(function(){
		
		//mobile menu toggle
	    $(".menubar-btn").click(function(){
	        $("#mobilemenu-wrap").addClass("open-menu");
	    });
	    $(".close-icon").click(function(){
	        $("#mobilemenu-wrap").removeClass("open-menu");
	    });



	    //upcoming event slider
	    var lightSliderElement = $("#lightSlider");

	    $(lightSliderElement).lightSlider({
	    	 item: 2,
	    	 auto: true,
	    	 loop: true,
	    	 pause: 2500
	    });
	    
	    //photo gallery filter
	    $(".filter-button").click(function(){
	        var value = $(this).attr('data-filter');
	        
	        if(value == "all")
	        {
	            //$('.filter').removeClass('hidden');
	            $('.filter').show('1000');
	        }
	        else
	        {
	//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
	//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
	            $(".filter").not('.'+value).hide('3000');
	            $('.filter').filter('.'+value).show('3000');
	            
	        }
    	});
    
	    if ($(".filter-button").removeClass("active")) {
			$(this).removeClass("active");
		}
		$(this).addClass("active");
		
		//Testimonial slider
		$('.carousel').carousel({
		  interval: 3000
		})
		
	});
