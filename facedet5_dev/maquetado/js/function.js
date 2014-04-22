var drawFaceId, drawHatId, drawFixedImageId, drawBigId;;
function cambiarImagen(numImg){
    var imagen = numImg;
    var ruta, tipoImg;
    switch(imagen){


        case '1':
            ruta = "img/originales/cara_lentes.png";
            tipoImg = "cara";
            break;
        case '2':
            ruta = "img/originales/cara_grande_likeasir.png";
            tipoImg = "cara_grande";
            break;
        case '3':
            ruta = "img/originales/sombrero_charro.png";
            tipoImg = "sombrero";
            break;
        case '4':
            ruta = "img/originales/sombrero_trebol.png";
            tipoImg = "sombrero";
            break;
        case '5':
            ruta = "img/originales/sombrero_vikingo.png";
            tipoImg = "sombrero";
            break;
        case '6':
            ruta = "img/fuego/fija_incendio.png";
            tipoImg = "imagen";
            break;
        case '7':
            ruta = "img/fuego/cara_fuegoboca.png";
            tipoImg = "cara";
            break;
        case '8':
            ruta = "img/fuego/sombrero_1.png";
            tipoImg = "sombrero";
            break;
        case '9':
            ruta = "img/fuego/sombrero_2.png";
            tipoImg = "sombrero";
            break;
        case '10':
            ruta = "img/salsa_brava/cara_grande_arabe.png";
            tipoImg = "cara_grande";
            break;
        case '11':
            //ruta = "facedet/rayos.png";
            ruta = "img/salsa_brava/cara_boca.png";
            tipoImg = "cara";
            break;
        case '12':
            //ruta = "facedet/rayos.png";
            ruta = "img/salsa_brava/cara_grande_gato.png";
            tipoImg = "cara_grande";
            break;
        case '13':
            //ruta = "facedet/rayos.png";
            ruta = "img/salsa_brava/cara_grande_perro.png";
            tipoImg = "cara_grande";
            break;
    }
    document.getElementById("elegida").innerHTML = ruta;
    if (navigator.appName == "Microsoft Internet Explorer") {
        console.log(ruta);
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
            case "cara_grande":
                stopAllAnimations();
                drawBigFaceIE();
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
            case "cara_grande":
                stopAllAnimations();
                drawBigFace();
                break;
        }
    }
}

function stopAllAnimations(){
    window.cancelAnimationFrame(drawFaceId);
    window.cancelAnimationFrame(drawHatId);
    window.cancelAnimationFrame(drawFixedImageId);
    window.cancelAnimationFrame(drawBigId);
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
        //ctx.drawImage(img, comp[i].x, comp[i].y, comp[i].width, comp[i].height);
        ctx.drawImage(img, comp[i].x, comp[i].y + (comp[i].y * 0.15), comp[i].width, comp[i].height);
    }
    
}

function drawBigFace(){
    console.log("big face");
    drawBigId = window.requestAnimationFrame(drawBigFace);
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
        //ctx.drawImage(img, comp[i].x - (comp[i].x * 0.27), comp[i].y - (comp[i].y * 1.1), comp[i].width * 1.5, comp[i].height * 1.8);
        //ctx.drawImage(img, comp[i].x * 0.75, comp[i].y * 0.4, comp[i].width * 1.4 , comp[i].height * 1.7);
        ctx.drawImage(img, comp[i].x * 0.75, comp[i].y * 0.5, comp[i].width * 1.4 , comp[i].height * 1.7);
    }
    
}

function drawHat(){
    console.log("hat");
    drawHatId = window.requestAnimationFrame(drawHat);
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
        //ctx.drawImage(img, comp[i].x, (comp[i].y - (comp[i].height * 0.9)), comp[i].width, comp[i].height);
        ctx.drawImage(img, (comp[i].x - (comp[i].x * 0.50)), (comp[i].y - (comp[i].height * 1)), comp[i].width + 100 , comp[i].height + 20);
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
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");
    var img = new Image();
    img.src = document.getElementById("elegida").innerHTML;
    document.getElementById('imagenie').style.display = "inline";
    document.getElementById('imagenie').style.top = "330px";
    document.getElementById('imagenie').style.left = "570px";
    document.getElementById('imagenie').style.width = "150px";
    document.getElementById('imagenie').style.height = "150px";
    document.getElementById('imagenie').src = img.src;
}

function drawBigFaceIE(){
    console.log("b face ie");
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");
    var img = new Image();
    img.src = document.getElementById("elegida").innerHTML;
    document.getElementById('imagenie').style.display = "inline";
    document.getElementById('imagenie').style.top = "300px";
    document.getElementById('imagenie').style.left = "530px";
    document.getElementById('imagenie').style.width = "200px";
    document.getElementById('imagenie').style.height = "200px";
    document.getElementById('imagenie').src = img.src;
}

function drawHatIE(){
    console.log("hat ie");
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");
    var img = new Image();
    img.src = document.getElementById("elegida").innerHTML;
    document.getElementById('imagenie').style.display = "inline";
    /*document.getElementById('imagenie').style.top = "0px";
    document.getElementById('imagenie').style.left = "120px";
    document.getElementById('imagenie').style.width = "120px";
    document.getElementById('imagenie').style.height = "100px";*/
    document.getElementById('imagenie').style.top = "270px";
    document.getElementById('imagenie').style.left = "570px";
    document.getElementById('imagenie').style.width = "200px";
    document.getElementById('imagenie').style.height = "130px";
    document.getElementById('imagenie').src = img.src;
}

function drawFixedImageIE(){
    console.log("fixed imageie");
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");
    var img = new Image();
    img.src = document.getElementById("elegida").innerHTML;
    document.getElementById('imagenie').style.display = "inline";
    document.getElementById('imagenie').style.top = "295px";
    document.getElementById('imagenie').style.left = "475px";
    document.getElementById('imagenie').style.width = "373px";
    document.getElementById('imagenie').style.height = "243px";
    /*document.getElementById('controles').style.top = "-710px";*/
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