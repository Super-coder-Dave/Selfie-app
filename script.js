camera = document.getElementById("Webcam");
Webcam.set({
    width: 350,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 100,
})

var speechRecognition = window.webkitSpeechRecognition;

var Recognition = new speechRecognition();             

function Start(){
    document.getElementById("TextArea").value = "";
    Recognition.start();
}

Recognition.onresult = function (event) {
    console.log(event);

    var content = event.results[0][0].transcript;

       document.getElementById("TextArea").value = content;

       if(content == "take my selfie"){
           speak();
       }
}
function speak(){
    Webcam.attach(camera);

    synth = window.speechSynthesis

    speedData = "taking in 5 seconds"

    utterThis = new SpeechSynthesisUtterance(speedData);

    synth.speak(utterThis)
}

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfie").innerHTML = '<img id="selfie_img" src="'+data_uri+'"/>';
    });
}