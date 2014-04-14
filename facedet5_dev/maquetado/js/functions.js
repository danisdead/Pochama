/*
Archivo de funciones jQuery para los efectos en las cámaras.
*/

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
			/*$('#content_canvas_neut').remove();*/
		})

		/* Funciones para hacer funcionar el botón de los filtos de forma que al
		   clickearlo muestre u oculte los rollos para su respectiva cámara*/

		$('input.boton_filtro_fuego').on('click', function(){

			if($('div#rollo_fuego').is(':visible')){
				$('div#rollo_fuego').fadeOut('fast');
			}else{
				$('div#rollo_fuego').fadeIn('fast');
			}
			

		});

		$('input.boton_filtro_salsa').on('click', function(){

			if($('div#rollo_salsa').is(':visible')){
				$('div#rollo_salsa').fadeOut('fast');
			}else{
				$('div#rollo_salsa').fadeIn('fast');
			}

		});

		$('input.boton_filtro_originales').on('click', function(){

			if($('div#rollo_originales').is(':visible')){
				$('div#rollo_originales').fadeOut('fast');
			}else{
				$('div#rollo_originales').fadeIn('fast');
			}

		});

		/*Funcion para detectar clics fuera de los elementos del rollo y ocultar
		  con fade el elemento al dispararse el evento*/
		  
		$(document).mouseup(function (e){

		    var container = $("div#rollo_fuego");
		    var container_salsa = $("div#rollo_salsa");
		    var container_original = $("div#rollo_originales");

		    if (!container.is(e.target) && container.has(e.target).length === 0){
		        container.fadeOut('fast');
		    }
		    if (!container_salsa.is(e.target) && container_salsa.has(e.target).length === 0){
		        container_salsa.fadeOut('fast');
		    }
		    if (!container_original.is(e.target) && container_original.has(e.target).length === 0){
		        container_original.fadeOut('fast');
		    }
		});

})