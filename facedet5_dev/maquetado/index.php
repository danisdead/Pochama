<!DOCTYPE html>
<html>
<head>
	<title>Takis Cam</title>
    <meta property="og:title" content="Takis Webcam" />
    <meta property="og:description" content="Comparte tu foto" />
	<link rel="stylesheet" type="text/css" href="css/estilos.css">
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js"></script>
	<script type="text/javascript" src="js/functions.js"></script>
    <script type="text/javascript" src="js/CamShim.js"></script>
    <script type="text/javascript" src="js/calibrate.js"></script>
    <script type="text/javascript" src="js/common_utils.js" ></script>
    <script type="text/javascript" src="js/keypad.js" ></script>
    <script type="text/javascript" src="js/sylvester.js" ></script>
    <script type="text/javascript" src="js/cam.js"></script>
    <link href='https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,700' rel='stylesheet' type='text/css'>
    <script>
    $(document).ready(function(){
        $("#flash").css('visibility', 'hidden');
        $('.container').on('click', '#takeSnapshot', function() { 
            console.log("click flash");
            $("#flash").fadeIn(500);
            $("#flash").css('visibility', 'visible');
            $("#flash").fadeOut(500, function(){
                $("#flash").css('display', 'block');
                $("#flash").css('visibility', 'hidden');
            });
        })

        /*Muestra u oculta el aviso si el usuario usa Internet Explorer*/
        if (navigator.appName == 'Microsoft Internet Explorer'){
            $('#avisoIE').fadeIn(1000);
        } else {
            $('#avisoIE').css('visibility', 'hidden');
        }
        $('input#cerrar_avisoIE').on('click', function(){
            $('#avisoIE').fadeOut(1000);
        })
    })
    </script>
</head>
<body onload="displayCam()">
    <div id="fb-root"></div>
    <script>

    window.fbAsyncInit = function() {
        FB.init({
          appId      : '502120643233311',
          status     : true,
          xfbml      : true
        });
      };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/es_ES/all.js#xfbml=1&appId=502120643233311";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    
    </script>
    <div id="avisoIE">
        
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <a href="https://www.google.com/intl/es-419/chrome/browser/" target="_blank"><img src="img/chrome.png" /></a>
        <a href="https://support.apple.com/downloads/#safari" target="_blank"><img src="img/safari.png" /></a>
        <a href="https://www.mozilla.org/es-MX/firefox/new/" target="_blank"><img src="img/firefox.png" /></a>
        <br/>
        <input type="button" id="cerrar_avisoIE" value="Cerrar"/>
    </div>
	<div id="container" style="height:874px;">
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
            <input type="button" value="" id="retake" onclick="otraVez()" style="">
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
            <input type="button" value="" id="retake" onclick="otraVez()" style="">
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
            <input type="button" value="" id="retake" onclick="otraVez()" style="">
		</div>
        <canvas id="output" width="373" height="243" ></canvas>
        <a href="javascript:fbshareCurrentPage()" target="_blank" alt="Compartir en Facebook" id="fbsharer"></a>
        <!--<div class="fb-share-button" data-href="#" data-type="button"></div>-->
        <img id="imagenie" src="facedet/glasses2.png" alt="The Scream" />
        <div id="flash"></div>
        <script src="facedet/ccv.js"></script>
        <script src="facedet/face.js"></script>
        <div id="elegida">Elige una imagen</div>
        <input type="button" class="instr_Overlay" value="?" >
        <div id="instruccionesOverlay"></div>
        <div id="fotoOverlay"></div>
        <div id="contenedor_foto_share"></div>
	    <input type="hidden" name="img_val" id="img_val" value="" />
        <canvas id="imgCompleta" width="800" height="600" style="display:none">
        Your browser does not support the HTML5 canvas tag.</canvas>
    </div>
    <script>
    </script>
    <script type="text/javascript" src="js/function.js"></script>
    <script type="text/javascript" src="js/html2canvas.js"></script>
    <script src="https://d224rrjkj24om2.cloudfront.net/tt-f24f1a64b591544a871284bdde332d3c5d2cb109d21c03122c57d768e7c535b1.js">
</script>
<script type="text/javascript">
var ruta;

function capture(){
    html2canvas(document.body.children[3], {
  onrendered: function(canvas) { 
    var img = canvas.toDataURL("image/png");

    var new_img_canvas = new Image();
    new_img_canvas.src = img;
    var c = document.getElementById('imgCompleta');
    var ctx = c.getContext("2d");
    ctx.drawImage(new_img_canvas,0,-300,800,874);

    var new_img = c.toDataURL('image/png');
    $('#img_val').val(new_img);
    $('#contenedor_foto_share').html('<img src="' + new_img + '"width="800px" height="600px"/>');

    $.post('gfot.php', {img_val : $('#img_val').val()}, function(data){
        ruta = 'https://www.ccdigital.mx/takis-webcam/img/usr/' + data;
    })

  },
  width: 1080,
  height: 620
});

}

function fbshareCurrentPage(){
    window.open("https://www.facebook.com/sharer/sharer.php?u="+ruta+"&t="+document.title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
            return false;
    }

</script>
</body>
</html>