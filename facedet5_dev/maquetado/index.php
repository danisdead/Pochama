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
		<div id="cam_neut">
			<div class="cont_botones">
				<input class="takis_fuego" type="button" value="">
				<input class="takis_salsa" type="button" value="">
				<input class="takis_original" type="button" value="">
			</div>
		</div>
		<!--div id="cam_fuego"-->
		<img id="cam_fuego" src="img/FUEGO.png" width="800px" height="600px" style="position: relative; z-index: 2;">
			<div id="content_canvas" style="position: relative; display:none; top: -396px; left: 173px; z-index: 1;">
				<canvas id="canvas" width="373" height="243" style="height: 272px;"></canvas>
			</div>
			<div class="cont_botones">
				<input class="takis_fuego" type="button" value="">
				<input class="takis_salsa" type="button" value="">
				<input class="takis_original" type="button" value="">
			</div>
			<div class="cont_boton_filtro">
				<input type="button" class="boton_filtro_fuego">
			</div>	
			<div id="rollo_fuego">
			</div>
		<!--/div-->
		<div id="cam_salsa">
			<div class="cont_botones">
				<input class="takis_fuego" type="button" value="">
				<input class="takis_salsa" type="button" value="">
				<input class="takis_original" type="button" value="">
			</div>
			<div class="cont_boton_filtro">
				<input type="button" class="boton_filtro_salsa">
			</div>	
			<div id="rollo_salsa">
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
			</div>
		</div>
        <div id="camera"></div>
        <canvas id="canvas" width="373" height="243"></canvas>
        <canvas id="output" width="373" height="243"></canvas>
        
        <img id="imagenie" src="facedet/glasses2.png" alt="The Scream" />
        <div id="flash"></div>
        <script src="facedet/ccv.js"></script>
        <script src="facedet/face.js"></script>
        <img id="scream" src="facedet/glasses2.png" alt="The Scream" width="120">
        <div id="controles">
            <input type="button" class="boton" style="background:url('img/mini1.png');" onclick="cambiarImagen('1')" />
            <input type="button" class="boton" style="background:url('img/mini2.png');" onclick="cambiarImagen('2')" />
            <input type="button" class="boton" style="background:url('img/mini3.png');" onclick="cambiarImagen('3')" />
            <input type="button" class="boton" style="background:url('img/mini4.png');" onclick="cambiarImagen('4')" />
            <div id="elegida">Elige una imagen</div>
            <input type="button" value="Foto" id="takeSnapshot" onclick="tomarFoto()">
            <input type="button" value="Otra vez" id="retake" onclick="otraVez()">
            <div id='key' style='font-size: 48px; width:100%; padding-left:50%;float:right'>&nbsp;</div>
        </div>
	</div>
</body>
</html>