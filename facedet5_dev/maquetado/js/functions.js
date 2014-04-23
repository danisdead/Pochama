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
			document.getElementById('imagenie').style.display = "none";

		})

		$('input.takis_salsa').on('click', function(){
			var div = "#";
			div += $(this).parents().eq(1).attr('id');
			$(div).fadeOut('slow', function(){
					$('#cam_salsa').fadeIn('slow');	
			});
			document.getElementById('imagenie').style.display = "none";
		})

		$('input.takis_original').on('click', function(){
			var div = "#";
			div += $(this).parents().eq(1).attr('id');
			$(div).fadeOut('slow', function(){
						$('#cam_original').fadeIn('slow');	
			});
			document.getElementById('imagenie').style.display = "none";

		});

		$('.takis_fuego, .takis_salsa, .takis_original').on('click', function(){
			/*$('#content_canvas_neut').remove();*/
		})

		/* Funciones para hacer funcionar el botón de los filtos de forma que al
		   clickearlo muestre u oculte los rollos para su respectiva cámara*/

		$('input.boton_filtro_fuego').on('click', function(){
			$('#retake').hide();

			if($('div#rollo_fuego').is(':visible')){
				$('div#rollo_fuego').fadeOut('fast');
			}else{
				$('div#rollo_fuego').fadeIn('fast');
			}
			

		});

		$('input.boton_filtro_salsa').on('click', function(){
			$('#retake').hide();

			if($('div#rollo_salsa').is(':visible')){
				$('div#rollo_salsa').fadeOut('fast');
			}else{
				$('div#rollo_salsa').fadeIn('fast');
			}

		});

		$('input.boton_filtro_originales').on('click', function(){
			$('#retake').hide();

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
		        $('#retake').show();
		    }
		    if (!container_salsa.is(e.target) && container_salsa.has(e.target).length === 0){
		        container_salsa.fadeOut('fast');
		        $('#retake').show();
		    }
		    if (!container_original.is(e.target) && container_original.has(e.target).length === 0){
		        container_original.fadeOut('fast');
		        $('#retake').show();
		    }
		});

		$('#orig_antifaz, #orig_buenmozo, #orig_charro, #orig_irish, #orig_vikingo').on('click', function(){
			$(this).parent().fadeOut('fast');
			$('#retake').show();
		})

		/*Overlay Instrucciones*/
		var overInstrucciones = $('<div>').attr('id', 'over_instr');
		overInstrucciones.css({'height' : '500px', 'width' : '705px', 'background' : 'url("img/instrucciones.png") no-repeat', 'position': 'fixed', 'top' : '0px', 'margin' : '4% 0 0 -28%', 'z-index' : '2', 'left' : '50%', 'display' : 'none'});

		$('.instr_Overlay').on('click', function(){
			console.log();
			$(document).find('div#instruccionesOverlay').empty().append(overInstrucciones);
			//var content_instrucciones = "<div id='leftpanel'><div style='color:white; font-size:20px; margin:28px;'>Selecciona la fecha:</div><div class='styled-select'><select name='select_activacion' id='select_activacion' onchange='cambiarImg()'><option value='img/17_Abril.png'>17 Abril</option><option value='img/18_Abril.png'>18 Abril</option><option value='img/19_Abril.png'>19 Abril</option></select></div></div><div id='rightpanel'><img id='img_activacion' src='img/17_Abril.png' style='width: 92%;'/></div>";
			//$(document).find('div#over_instr').append(content_instrucciones);
			$('div#over_instr').fadeIn('medium');
		})

		$(document).mouseup(function (e){

		    var cont_act = $("div#over_instr");
		    if (!cont_act.is(e.target) && cont_act.has(e.target).length === 0){
		        cont_act.fadeOut('medium').empty();
		    }

		});

})