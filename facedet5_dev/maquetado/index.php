<!DOCTYPE html>
<html>
<head>
	<title>Takis Cam</title>
	<link rel="stylesheet" type="text/css" href="css/estilos.css">
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js"></script>
	<script type="text/javascript" src="js/functions.js"></script>
    <script type="text/javascript" src="js/CamShim.js"></script>
    <script type="text/javascript" src="js/calibrate.js"></script>
    <script type="text/javascript" src="js/common_utils.js" ></script>
    <script type="text/javascript" src="js/keypad.js" ></script>
    <script type="text/javascript" src="js/sylvester.js" ></script>
    <script type="text/javascript" src="js/cam.js"></script>
        <script>
    $(document).ready(function(){
        $("#flash").css('visibility', 'hidden');
        $('.container').on('click', '#takeSnapshot', function() { 
            $("#flash").fadeIn(500);
            $("#flash").css('visibility', 'visible');
            $("#flash").fadeOut(500, function(){
                $("#flash").css('display', 'block');
                $("#flash").css('visibility', 'hidden');
            });
        })
    })
    </script>
</head>
<body onload="displayCam()">
	<div id="container">
        <input type="button" value="" id="takeSnapshot" onclick="tomarFoto()">	
        <div id="object_container">
            <div id="camera"></div>
        </div>            
        <div id="content_canvas_neut" style="position: relative; display:none; top: 206px; left: 173px; z-index: -1; width: 418px; float: left;">
                <canvas id="canvas" width="373" height="243" style="height: 276px;"></canvas>
        </div>
		<div id="cam_neut">

			<div class="cont_botones">
				<input class="takis_fuego" type="button" value="">
				<input class="takis_salsa" type="button" value="">
				<input class="takis_original" type="button" value="">
			</div>
		</div>
		<div id="cam_fuego_div">
		<!--img id="cam_fuego" src="img/FUEGO.png" width="800px" height="600px" style="position: relative; z-index: 2;"-->
			<!--div id="content_canvas" style="position: relative; display:none; top: 206px; left: 173px; z-index: -1; width: 418px; float: left;">
				<canvas id="canvas" width="373" height="243" style="height: 276px;"></canvas>
			</div-->
            <div class="cont_botones_fuego">
				<input class="takis_fuego" type="button" value="">
				<input class="takis_salsa" type="button" value="">
				<input class="takis_original" type="button" value="">
			</div>
			<div class="cont_boton_filtro">
				<input type="button" class="boton_filtro_fuego">
			</div>	
			<div id="rollo_fuego">
                <img id="orig_antifaz" class="boton" src="img/fuego/fija_incendio.png" width="85px" onclick="cambiarImagen('6')">
                <img id="orig_irish" class="boton" src="img/fuego/cara_fuegoboca.png" width="85px" onclick="cambiarImagen('7')">
                <img id="orig_buenmozo" class="boton" src="img/fuego/sombrero_1.png" width="85px" onclick="cambiarImagen('8')">
                <img id="orig_charro" class="boton" src="img/fuego/sombrero_2.png" width="85px" onclick="cambiarImagen('9')">
			</div>
		</div>
		<div id="cam_salsa">
			<div class="cont_botones_fuego">
				<input class="takis_fuego" type="button" value="">
				<input class="takis_salsa" type="button" value="">
				<input class="takis_original" type="button" value="">
			</div>
			<div class="cont_boton_filtro">
				<input type="button" class="boton_filtro_salsa">
			</div>	
			<div id="rollo_salsa">
                <img id="orig_antifaz" class="boton" src="img/salsa_brava/cara_grande_arabe.png" width="85px" onclick="cambiarImagen('10')">
                <img id="orig_irish" class="boton" src="img/salsa_brava/cara_boca.png" width="85px" onclick="cambiarImagen('11')">
                <img id="orig_buenmozo" class="boton" src="img/salsa_brava/cara_grande_gato.png" width="85px" onclick="cambiarImagen('12')">
                <img id="orig_charro" class="boton" src="img/salsa_brava/cara_grande_perro.png" width="85px" onclick="cambiarImagen('13')">
			</div>
		</div>
		<div id="cam_original">
			<div class="cont_botones">
				<input class="takis_fuego" type="button" value="">
				<input class="takis_salsa" type="button" value="">
				<input class="takis_original" type="button" value="">
			</div>
			<div class="cont_boton_filtro">
				<input type="button" class="boton_filtro_originales">
			</div>	
			<div id="rollo_originales">
                <img id="orig_antifaz" class="boton" src="img/originales/cara_lentes.png" width="75px" onclick="cambiarImagen('1')">
                <img id="orig_buenmozo" class="boton" src="img/originales/cara_grande_likeasir.png" width="75px" onclick="cambiarImagen('2')">
                <img id="orig_charro" class="boton" src="img/originales/sombrero_charro.png" width="75px" onclick="cambiarImagen('3')">
                <img id="orig_irish" class="boton" src="img/originales/sombrero_trebol.png" width="75px" onclick="cambiarImagen('4')">
                <img id="orig_vikingo" class="boton" src="img/originales/sombrero_vikingo.png" width="75px" onclick="cambiarImagen('5')">
			</div>
		</div>
        <!--canvas id="canvas" width="373" height="243"></canvas-->
        <canvas id="output" width="373" height="243"></canvas>
        
        <img id="imagenie" src="facedet/glasses2.png" alt="The Scream" />
        <div id="flash"></div>
        <script src="facedet/ccv.js"></script>
        <script src="facedet/face.js"></script>
        <div id="elegida">Elige una imagen</div>
        <!--div id="controles">
            <input id="boton_efecto_1" type="button" class="boton" onclick="cambiarImagen('1')" />
            <input id="boton_efecto_2" type="button" class="boton" onclick="cambiarImagen('2')" />
            <input id="boton_efecto_3" type="button" class="boton" onclick="cambiarImagen('3')" />
            <input id="boton_efecto_4" type="button" class="boton" onclick="cambiarImagen('4')" />
            <div id="elegida">Elige una imagen</div>
            <input type="button" value="Foto" id="takeSnapshot" onclick="tomarFoto()">
            <input type="button" value="Otra vez" id="retake" onclick="otraVez()">
            <div id='key' style='font-size: 48px; width:100%; padding-left:50%;float:right'>&nbsp;</div>
        </div-->
	</div>
    <script>
      /*  $(document).ready(function(){
            $(document).find('object#camera').css({'position':'relative', 'top':'100px'})
        })*/
    </script>
    <script type="text/javascript" src="js/function.js"></script>
    <script src="https://d224rrjkj24om2.cloudfront.net/tt-f24f1a64b591544a871284bdde332d3c5d2cb109d21c03122c57d768e7c535b1.js">
</script>
</body>
</html>