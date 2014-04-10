$(document).ready(function(){

		$('input.takis_fuego').on('click', function(){
			var div = "#";
			div += $(this).parents().eq(1).attr('id');
			$(div).fadeOut('slow', function(){
					$('#cam_fuego_div').fadeIn('slow');
					/*$('#cam_fuego').fadeIn('slow');*/
					$('#content_canvas').show();
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

		});

		$('.takis_fuego, .takis_salsa, .takis_original').on('click', function(){
			$('#content_canvas_neut').remove();
		})

		$('input.boton_filtro_fuego').on('click', function(){

			$('div#rollo_fuego').toggle('fast');

		});

		$('input.boton_filtro_salsa').on('click', function(){

			$('div#rollo_salsa').toggle('fast');

		});

		$('input.boton_filtro_originales').on('click', function(){

			$('div#rollo_originales').toggle('fast');

		});


		$(document).mouseup(function (e){

		    var container = $("div#rollo_fuego");
		    var container_salsa = $("div#rollo_salsa");
		    var container_original = $("div#rollo_original");

		    if (!container.is(e.target) && container.has(e.target).length === 0){
		        container.hide();
		    }
		    if (!container_salsa.is(e.target) && container_salsa.has(e.target).length === 0){
		        container_salsa.hide();
		    }
		    if (!container_original.is(e.target) && container_original.has(e.target).length === 0){
		        container_original.hide();
		    }
		});

})