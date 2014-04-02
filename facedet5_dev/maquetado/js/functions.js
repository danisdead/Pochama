$(document).ready(function(){

		$('input.takis_fuego').on('click', function(){
			var div = "#";
			div += $(this).parents().eq(1).attr('id');
			$(div).fadeOut('slow', function(){
					$('#cam_fuego').fadeIn('slow');
			});

		})

		$('input.takis_salsa').on('click', function(){
			var div = "#";
			div += $(this).parents().eq(1).attr('id');
			$(div).fadeOut('slow', function(){
					$('#cam_salsa').fadeIn('slow');	
			});

		})

		$('input.takis_original').on('click', function(){
			var div = "#";
			div += $(this).parents().eq(1).attr('id');
			$(div).fadeOut('slow', function(){
					$('#cam_original').fadeIn('slow');	
			});

		})

		$('input.boton_filtro_fuego').on('click', function(){

			$('div#rollo_fuego').toggle();

		});

		 $(document).on('mouseup', function(e){
		 	var container = $("#rollo_fuego");

		    if (container.has(e.target).length === 0){
		        container.hide(0);
		    }
		})
})