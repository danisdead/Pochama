function cambiarImagen(numImg){
    var imagen = numImg;
    var ruta, tipoImg;
    switch(imagen){
        case '1':
            ruta = "facedet/glasses_original.png";
            tipoImg = "cara";
            break;
        case '2':
            ruta = "facedet/glasses2.png";
            tipoImg = "cara";
            break;
        case '3':
            ruta = "facedet/mono.png";
            tipoImg = "cara";
            break;
        case '5':
            ruta = "facedet/hat.png";
            tipoImg = "sombrero";
            break;
        case '6':
            ruta = "facedet/rayos.png";
            tipoImg = "imagen";
            break;
    }
    document.getElementById("elegida").innerHTML = ruta;
    stopAllAnimations();
    if (navigator.appName == "Microsoft Internet Explorer") {
        drawToCanvasIE();
         switch(tipoImg){
            case "cara":
                drawFaceIE();
                break;
            case "sombrero":
                drawHatIE();
                break;
            case "imagen":
                drawFixedImage();
                break;
        }
    } else {
        switch(tipoImg){
            case "cara":
                drawFace();
                break;
            case "sombrero":
                drawHat();
                break;
            case "imagen":
                drawFixedImage();
                break;
        }
    }
}

function stopAllAnimations(){
    window.cancelAnimationFrame(drawFace);
    window.cancelAnimationFrame(drawHat);
    window.cancelAnimationFrame(drawFixedImage);
    window.cancelAnimationFrame(drawFaceIE);
    window.cancelAnimationFrame(drawHatIE);
    console.log("Stop");
}

function drawFace(){
    console.log("face");
    window.requestAnimationFrame(drawFace);
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    var comp = ccv.detect_objects({
        canvas: c,
        cascade: cascade,
        interval: 1,
        min_neighbors: 1
    });

    var img = new Image();
    img.src = document.getElementById("elegida").innerHTML;

    for (i = comp.length; i--; ) {
        ctx.drawImage(img, comp[i].x, comp[i].y, comp[i].width, comp[i].height);
    }
    
}

function drawHat(){
    console.log("hat");
    window.requestAnimationFrame(drawHat);
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    var comp = ccv.detect_objects({
        canvas: c,
        cascade: cascade,
        interval: 1,
        min_neighbors: 1
    });

    var img = new Image();
    img.src = document.getElementById("elegida").innerHTML;

    for (i = comp.length; i--; ) {
        ctx.drawImage(img, comp[i].x, (comp[i].y - (comp[i].height * 0.9)), comp[i].width, comp[i].height);
    }
}

function drawFixedImage(){
    console.log("image");
    //window.requestAnimationFrame(drawFixedImage);
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var img = new Image();
    img.src = document.getElementById("elegida").innerHTML;
    ctx.drawImage(img, 0, 0, c.width, c.height);
}

function drawFaceIE(){
    window.requestAnimationFrame(drawFaceIE);
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");

    var comp = ccv.detect_objects({
        canvas: c,
        cascade: cascade,
        interval: 1,
        min_neighbors: 1
    });

    var img = new Image();
    img.src = document.getElementById("elegida").innerHTML;

    if (comp.length == 0){
        ctx.drawImage(img, 105, 50, 160, 160);
    } else {
        for (i = comp.length; i--; ) {
            ctx.drawImage(img, comp[i].x, comp[i].y, comp[i].width, comp[i].height);
        }
    }
}

function drawHatIE(){
    window.requestAnimationFrame(drawHatIE);
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    var comp = ccv.detect_objects({
        canvas: c,
        cascade: cascade,
        interval: 1,
        min_neighbors: 1
    });

    var img = new Image();
    img.src = document.getElementById("elegida").innerHTML;

    if (comp.length == 0){
        ctx.drawImage(img, 120, 0, 130, 120);
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