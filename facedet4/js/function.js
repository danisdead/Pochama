var drawFaceId, drawHatId, drawFaceIdIE, drawHatIdIE, drawFixedImageId, drawFixedImageIEId;
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
        case '4':
            ruta = "facedet/ojos.png";
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
    if (navigator.appName == "Microsoft Internet Explorer") {
         switch(tipoImg){
            case "cara":
                stopAllAnimations();
                drawFaceIE();
                break;
            case "sombrero":
                stopAllAnimations();
                drawHatIE();
                break;
            case "imagen":
                stopAllAnimations();
                drawFixedImageIE();
                break;
        }
    } else {
        switch(tipoImg){
            case "cara":
                stopAllAnimations();
                drawFace();
                break;
            case "sombrero":
                stopAllAnimations();
                drawHat();
                break;
            case "imagen":
                stopAllAnimations();
                drawFixedImage();
                break;
        }
    }
}

function stopAllAnimations(){
    window.cancelAnimationFrame(drawFaceId);
    window.cancelAnimationFrame(drawHatId);
    window.cancelAnimationFrame(drawFixedImageId);
    console.log("Stop");
}

function drawFace(){
    console.log("face");
    drawFaceId = window.requestAnimationFrame(drawFace);
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    var comp = ccv.detect_objects({
        canvas: c,
        cascade: cascade,
        interval: 2, //Sensibilidad del face detection. 
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
    var drawHatId = window.requestAnimationFrame(drawHat);
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
    drawFixedImageId = window.requestAnimationFrame(drawFixedImage);
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var img = new Image();
    img.src = document.getElementById("elegida").innerHTML;
    ctx.drawImage(img, 0, 0, c.width, c.height);
}

function drawFaceIE(){
    console.log("face ie");
    //drawFaceIdIE = window.requestAnimationFrame(drawFaceIE);
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");

    /*var comp = ccv.detect_objects({
        canvas: c,
        cascade: cascade,
        interval: 1,
        min_neighbors: 1
    });*/

    var img = new Image();
    img.src = document.getElementById("elegida").innerHTML;

    //if (comp.length == 0){
        document.getElementById('imagenie').style.display = "inline";
        document.getElementById('imagenie').style.top = "52px";
        document.getElementById('imagenie').style.left = "103px";
        document.getElementById('imagenie').style.width = "150px";
        document.getElementById('imagenie').style.height = "150px";
        document.getElementById('imagenie').src = img.src;
        
    /*} else {
        for (i = comp.length; i--; ) {
            ctx.drawImage(img, comp[i].x, comp[i].y, comp[i].width, comp[i].height);
        }
    }*/
}

function drawHatIE(){
    console.log("hat ie");
    //drawHatIdIE = window.requestAnimationFrame(drawHatIE);
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");

    var img = new Image();
    img.src = document.getElementById("elegida").innerHTML;

    document.getElementById('imagenie').style.display = "inline";
    document.getElementById('imagenie').style.top = "0px";
    document.getElementById('imagenie').style.left = "120px";
    document.getElementById('imagenie').style.width = "120px";
    document.getElementById('imagenie').style.height = "100px";
    document.getElementById('imagenie').src = img.src;
}

function drawFixedImageIE(){
    console.log("fixed imageie");
    //drawFixedImageIEId = window.requestAnimationFrame(drawFixedImageIE);
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");

    var img = new Image();
    img.src = document.getElementById("elegida").innerHTML;

    document.getElementById('imagenie').style.display = "inline";
    document.getElementById('imagenie').style.top = "0px";
    document.getElementById('imagenie').style.left = "0px";
    document.getElementById('imagenie').style.width = "373px";
    document.getElementById('imagenie').style.height = "243px";
    document.getElementById('controles').style.top = "-710px";
    document.getElementById('imagenie').src = img.src;
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