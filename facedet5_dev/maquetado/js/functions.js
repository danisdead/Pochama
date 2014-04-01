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

			var div_rollo = $('<div>');
			div_rollo.attr('class', 'boton_filtro_fuego');
			$(document).append(div_rollo);

		})
})
