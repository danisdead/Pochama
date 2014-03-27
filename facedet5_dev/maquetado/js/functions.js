	$(document).ready(function(){

		$('area').on('click', function(){

			var div = "#";
			div += $(this).parents().eq(1).attr('id');
			var alt = $(this).attr('alt');

			switch(alt){
				case 'Fuego':
				$(div).fadeOut('slow', function(){
					$('#cam_fuego').fadeIn('slow');	
				});
				break;
				case 'Salsa Brava':
				$(div).fadeOut('slow', function(){
					$('#cam_salsa').fadeIn('slow');	
				});
				break;
				case 'Original':
				$(div).fadeOut('slow', function(){
					$('#cam_original').fadeIn('slow');	
				});
				break;
			}

		})
	})