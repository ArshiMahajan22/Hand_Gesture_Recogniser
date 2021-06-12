var Prediction1 = "";
var Prediction2 = "";
var speak_word1 = "";
var speak_word2 = "";

Webcam.set({
    width: 350,
    height: 300,
    img_format: 'png',
    png_quality: 90
});

cam = document.getElementById("Cam");
Webcam.attach(cam);

function TakePic(){
    Webcam.snap(function(data_URI){
        document.getElementById("Snap").innerHTML = '<img id="Snapshot" src="'+data_URI+'"/>';
    });
}

console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/b2Y_r4N35/model.json',ModelLoaded);

function ModelLoaded(){
    console.log("Model Loaded");
}

function speak(){
    Synth = window.speechSynthesis;
    Speak_Data = "The First Prediction is " + speak_word1 + " and the second prediction is " + speak_word2;
    console.log(Speak_Data);
    var Utter_This = new SpeechSynthesisUtterance(Speak_Data);
    Synth.speak(Utter_This);
}

function Check(){
    Img = document.getElementById("Snapshot");
    classifier.classify(Img, gotResult);
}
 
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        Prediction1 = results[0].label;
        Prediction2 = results[1].label;

        if(Prediction1 == "Victory"){
            document.getElementById("result_gesture_name").innerHTML = "Victory";
            document.getElementById("update_gesture").innerHTML = '<span>&#9996;</span>';
            speak_word1 = "Victory";
        }
        if(Prediction1 == "Hi"){
            document.getElementById("result_gesture_name").innerHTML = "Hi";
            document.getElementById("update_gesture").innerHTML = '<span>&#9995;</span>';
            speak_word1 = "Hi";
        }
        if(Prediction1 == "Go"){
            document.getElementById("result_gesture_name").innerHTML = "Go";
            document.getElementById("update_gesture").innerHTML = '<span>&#129305;</span>';
            speak_word1 = "Go";
        }
        if(Prediction1 == "Sure"){
            document.getElementById("result_gesture_name").innerHTML = "Sure";
            document.getElementById("update_gesture").innerHTML = '<span>&#128072;</span>';
            speak_word1 = "Sure";
        }
        if(Prediction1 == "Super"){
            document.getElementById("result_gesture_name").innerHTML = "Super";
            document.getElementById("update_gesture").innerHTML = '<span>&#128077;</span>';
            speak_word1 = "Super";
        }

        if(Prediction2 == "Victory"){
            document.getElementById("result_gesture_name2").innerHTML = "Victory";
            document.getElementById("update_gesture2").innerHTML = '<span>&#9996;</span>';
            speak_word2 = "Victory";
        }
        else if(Prediction2 == "Hi"){
            document.getElementById("result_gesture_name2").innerHTML = "Hi";
            document.getElementById("update_gesture2").innerHTML = '<span>&#9995;</span>';
            speak_word2 = "Hi";
        }
        else if(Prediction2 == "Go"){
            document.getElementById("result_gesture_name2").innerHTML = "Go";
            document.getElementById("update_gesture2").innerHTML = '<span>&#129305;</span>';
            speak_word2 = "Go";
        }
        else if(Prediction2 == "Sure"){
            document.getElementById("result_gesture_name2").innerHTML = "Sure";
            document.getElementById("update_gesture2").innerHTML = '<span>&#128072;</span>';
            speak_word2 = "Sure";
        }
        else if(Prediction2 == "Bored"){
            document.getElementById("result_gesture_name2").innerHTML = "Super";
            document.getElementById("update_gesture2").innerHTML = '<span>&#128077;</span>';
            speak_word2 = "Super";
        }
        speak();
    }
}
