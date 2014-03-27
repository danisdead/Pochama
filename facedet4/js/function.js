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
    drawToCanvas();              
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

    //var img=document.getElementById("scream");
    var img = new Image();
    var rutaImgn = document.getElementById("elegida").innerHTML;
    if (rutaImgn == "Elige una imagen"){
        img.src = "facedet/glasses_original.png";
    } else {
        img.src = document.getElementById("elegida").innerHTML;
    }
                
    var w = 300 / 4 * 0.8;
    var h = 270 / 4 * 0.8;
    var m = 4;
    var w = 4;
    if (comp.length == 0){
        //ctx.drawImage(img, 100, 40, 150, 150); //IE
    } else {
        for (i = comp.length; i--; ) {
            ctx.drawImage(img, comp[i].x, comp[i].y, comp[i].width, comp[i].height);
        }
    }
}

function tomarFoto(){
    document.getElementById('output').style.visibility = "visible";
    var output = document.getElementById('output');
    var ctx = output.getContext("2d");
    var source = document.getElementById('canvas');
    ctx.drawImage(source, 0, 0);
}

function otraVez(){
    document.getElementById('output').style.visibility = "hidden";
}