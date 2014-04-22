        var frameCount = 0;
        var fpsCalcTimeSecs = 5;
        
        var width = 320;/*80; 373*/
        var height = 240;/*60; 243*/
    
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
                $(document).find('div#object_container').css('opacity','0');
                $('#content_canvas_neut').show();
                document.getElementById('camera').style.width = width + "px";
                document.getElementById('camera').style.height = height + "px";
                //mostrar #elcanvas de la camara
                document.getElementById('canvas').style.visibility = "visible";
                /*document.getElementById('camera').style.visibility = "hidden";*/
                document.getElementById('container').css('margin-top', '-221px');
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