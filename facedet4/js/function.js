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
    case '5':
            ruta = "facedet/hat.png";
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

var tipoImg; 

function setTipoImg(tipo){
    tipoImg = tipo;
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
        //img.src = "facedet/hat.png";
    }
    /*switch(rutaImgn){
    case 'facedet/hat.png': //Tipo sombrero

            break;
    case '2': // Tipo cara
            ruta = "facedet/glasses2.png";
            break;
    } */
    if (comp.length == 0){
        //ctx.drawImage(img, 100, 40, 150, 150); //IE
    } else {
        for (i = comp.length; i--; ) {
            ctx.drawImage(img, comp[i].x, comp[i].y, comp[i].width, comp[i].height);
            //ctx.drawImage(img, comp[i].x, (comp[i].y - comp[i].height), comp[i].width, comp[i].height);
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