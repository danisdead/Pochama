	$(document).ready(function(){

		var div = "#";

		$('#takis_fuego').on('click', function(){

			div += $(this).parents().eq(1).attr('id');
			$(div).fadeOut('slow', function(){
					$('#cam_fuego').fadeIn('slow');
			});

		})

		$('#takis_salsa').on('click', function(){

			div += $(this).parents().eq(1).attr('id');
			$(div).fadeOut('slow', function(){
					$('#cam_salsa').fadeIn('slow');	
			});

		})

		$('#takis_original').on('click', function(){

			div += $(this).parents().eq(1).attr('id');
			$(div).fadeOut('slow', function(){
					$('#cam_original').fadeIn('slow');	
			});

		})
	})