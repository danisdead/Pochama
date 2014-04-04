$(document).ready(function(){

		$('input.takis_fuego').on('click', function(){
			var div = "#";
			div += $(this).parents().eq(1).attr('id');
			$(div).fadeOut('slow', function(){
					$('#cam_fuego').fadeIn('slow');
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


        function cambiarImagen(numImg){
    var imagen = numImg;
    var ruta;
    switch(imagen){
        case '1':
            ruta = "facedet/glasses_original.png";
            break;
    case '2':
            ruta = "facedet/glasses2.png";
            break;
    case '3':
            ruta = "facedet/mono.png";
            break;
    case '4':
            ruta = "facedet/ojos.png";
            break;
    }
    window.cancelAnimationFrame(drawToCanvas);
    window.cancelAnimationFrame(drawToCanvasIE);
    document.getElementById("elegida").innerHTML = ruta;
    
    if (navigator.appName == "Microsoft Internet Explorer") {
        drawToCanvasIE();
    } else {
        drawToCanvas();
    }
}

function drawToCanvas(){
    window.requestAnimationFrame(drawToCanvas);
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");

    var comp = ccv.detect_objects({
        canvas: c,
        cascade: cascade,
        interval: 1, 
        min_neighbors: 1
    });

    var img = new Image();
    var rutaImgn = document.getElementById("elegida").innerHTML;
    if (rutaImgn == "Elige una imagen"){
        img.src = "facedet/glasses_original.png";
    } else {
        img.src = document.getElementById("elegida").innerHTML;
    }
                
    if (comp.length == 0){
        //ctx.drawImage(img, 100, 40, 150, 150); //IE
    } else {
        for (i = comp.length; i--; ) {
            ctx.drawImage(img, comp[i].x, comp[i].y, comp[i].width, comp[i].height);
        }
    }
}

function drawToCanvasIE(){
    window.requestAnimationFrame(drawToCanvas);
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");

    var comp = ccv.detect_objects({
        canvas: c,
        cascade: cascade,
        interval: 1, 
        min_neighbors: 1
    });

    var img = new Image();
    var rutaImgn = document.getElementById("elegida").innerHTML;
    if (rutaImgn == "Elige una imagen"){
        img.src = "facedet/glasses_original.png";
    } else {
        img.src = document.getElementById("elegida").innerHTML;
    }
                
    if (comp.length == 0){
        document.getElementById('imagenie').style.display = "inline";
        document.getElementById('imagenie').src = rutaImgn;
    } else {
        for (i = comp.length; i--; ) {
            ctx.drawImage(img, comp[i].x, comp[i].y, comp[i].width, comp[i].height);
        }
    }
}

function tomarFoto(){
    var output = document.getElementById('output');
    var ctx = output.getContext("2d");
    var source = document.getElementById('canvas');
    ctx.drawImage(source, 0, 0);
    document.getElementById('output').style.visibility = "visible";
}

function otraVez(){
    document.getElementById('output').style.visibility = "hidden";
}



})