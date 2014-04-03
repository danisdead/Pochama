<!DOCTYPE html>
<html>
<head>
	<title>Takis Cam</title>
	<link rel="stylesheet" type="text/css" href="css/estilos.css">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js"></script>
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/functions.js"></script>
    <script type="text/javascript" src="js/CamShim.js"></script>
    <script type="text/javascript" src="js/calibrate.js"></script>
    <script type="text/javascript" src="js/common_utils.js" ></script>
    <script type="text/javascript" src="js/keypad.js" ></script>
    <script type="text/javascript" src="js/sylvester.js" ></script>
    <style>
    .boton{
	        /*border:none;*/
	        border:2px solid transparent;
	        height:80px;
	        width:80px;
	        background-repeat: no-repeat;
	        color:transparent;
	    }
	    .boton:hover{
	        border:2px solid #98bf21;
	    }
    </style>
    <script language="javascript">
        var frameCount = 0;
        var fpsCalcTimeSecs = 5;
        
        var width = 350;/*80;*/
        var height = 270;/*60;*/
    
        var img = new Image();
        var config;
        var calibratedColorRange;

        function showFrameCallback(encodedImage) {
            //document.getElementById('displayImg').src="data:image/jpg;base64," + encodedImage;
            img.src = "data:image/jpg;base64," + encodedImage;
            frameCount++;
        }
        
        function camStatus(status) {
            if (status == "ENABLED") {
                document.getElementById('camera').style.width = width + "px";
                document.getElementById('camera').style.height = height + "px";
            } else {
                alert("You need to give this page camera access.");
            }
        }
        
        function camInfo(messageLevel, message) {
            switch(messageLevel) {
                case "ERROR": alert(message); break;
                case "MESSAGE":  break; // need to do something useful here
                case "DEBUG":  document.forms["form1"].output.value += "DEBUG: " + message + "\n"; break;
            }
         }
         
         function onMotionDetected(movementOccuring) {
            /*
            if (movementOccuring) {
                camInfo("DEBUG", "movement occuring");
            } else {
                camInfo("DEBUG", "movement stopped");
            }
            */
         }
         
         function calcFramerate() {
            var fps = (frameCount/fpsCalcTimeSecs);
            frameCount = 0;
            //camInfo("DEBUG","fps = " + fps);
            //document.getElementById('fps').value = fps;
         }

        function displayCam() {
            // setup options
            var camOptions = new CamOptions();
            camOptions.resolutionX = width;
            camOptions.resolutionY = height;
            camOptions.framesPerSecond = 100;
            camOptions.displayVideo = "true";
            camOptions.camStatusCallbackFunction = "camStatus";
            camOptions.messageCallbackFunction = "camInfo";
            camOptions.motionDetectionCallbackFunction = "onMotionDetected";
            camOptions.mirrorVideo = "true";
            
            var camShim = new CamShim("camera", "showFrameCallback", camOptions); // create the flash camera interface
            
            // run this to measure framerate
            setInterval(calcFramerate, (fpsCalcTimeSecs * 1000));
            
            //config = new Config(document.getElementById('displayImg'), document.getElementById('canvas'));
            config = new Config(img, document.getElementById('canvas'));
        }

        function calibrate() {
            calibratedColorRange = config.sensedColorRange();
            config.close();

            document.getElementById('calibrateBtn').style.display = 'none';

            var keypad = new Keypad(img, document.getElementById('canvas'), calibratedColorRange);
            keypad.enable();
        }        
    </script>
</head>
<body onload="displayCam()">
	<div id="camera"></div>	
	<script src="facedet/ccv.js"></script>
	<script src="facedet/face.js"></script>
	 <input type="button" class="boton" style="background:url('img/mini1.png');" onclick="cambiarImagen('1')"></input>
        <input type="button" class="boton" style="background:url('img/mini2.png');" onclick="cambiarImagen('2')"></input>
        <input type="button" class="boton" style="background:url('img/mini3.png');" onclick="cambiarImagen('3')"></input>
        <input type="button" class="boton" style="background:url('img/mini4.png');" onclick="cambiarImagen('4')"></input>
        <div id="elegida">Elige una imagen</div>
        <script>
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
                document.getElementById("elegida").innerHTML = ruta;                
            }
            function drawToCanvas(){
                requestAnimationFrame(drawToCanvas);
                var c=document.getElementById("canvas");
                var ctx=c.getContext("2d");

                var comp = ccv.detect_objects({
                    canvas: c,
                    cascade: cascade,
                    interval: 1,
                    min_neighbors: 1
                });

                //var img=document.getElementById("scream");
                var img = new Image();
                img.src = document.getElementById("elegida").innerHTML;
                var w = 300 / 4 * 0.8;
                var h = 270 / 4 * 0.8;
                var m = 4;
                var w = 4;

                if (comp.length == 0){
                    //ctx.drawImage(img, 100, 40, 150, 150);
                } else {
                    for (i = comp.length; i--; ) {
                        ctx.drawImage(img, comp[i].x, comp[i].y, comp[i].width, comp[i].height);
                        console.log("x");
                        console.log(comp[i].x);
                        console.log("y");
                        console.log(comp[i].y);
                    }
                }
            }

        </script>
        <input type="button" value="Click me" onclick="drawToCanvas()">
        <div id='key' style='font-size: 48px; width:100%; padding-left:50%;float:right'>&nbsp;</div>
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
			<div id="content_canvas" style="position: relative; top: -396px; left: 173px; z-index: 1;">
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
	</div>
</body>
</html>