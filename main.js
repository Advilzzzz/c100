var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("text_box").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML = content;
    console.log(content);
    if(content == "Take My Selfie"){
        console.log("taking selfie in 5 seconds");
        speak();
    }
}
function speak(){
    var synth = window.SpeechSynthesis;
    speak_data = "taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
camera = document.getElementById("camerA");
Webcam.set({
    width:360, 
    height:250,
    image_format:'png',
    png_quality:90
});
Webcam.attach(camera);
setTimeout(function(){
    take_snapshot();
    save();
},5000);
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
