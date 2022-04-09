Webcam.set({
    height: 300,
    width: 350,
    image_format: 'png',
    png_quality: 100
})
camera = document.getElementById("camera")
Webcam.attach(camera)
function take_snapshot(){
    Webcam.snap(function (data) {
        document.getElementById("result").innerHTML = "<img id='capture_img' src='" + data + "' />"
    })
}
console.log('ml5 version:', ml5.version)
classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/gP8rDaQCz/model.json", modelLoaded)

function modelLoaded() {
    console.log("model Loaded")
}
function speak() {
    var synth = window.speechSynthesis;
    speak1 = "first prediction is " + predect0
    utterthis = new SpeechSynthesisUtterance(speak1)
    synth.speak(utterthis)
}
function pridect() {
    img = document.getElementById("capture_img")
    classifier.classify(img, gotResult)
}
function gotResult(e, r) {
    if (e) {
        console.log(e)
    } else {
        console.log(r)
        if (r[0].label == "Thumbs Up") {
            document.getElementById("result_emoji").innerHTML = "👍"
            document.getElementById("result_gesture_name").innerHTML = "All the Best"
            predect0 = "All the Best"
        }
        if (r[0].label == "Victory") {
            document.getElementById("result_emoji").innerHTML = "✌"
            document.getElementById("result_gesture_name").innerHTML = "Victory"
            predect0 = "Victory"
        }
        if (r[0].label == "Ok") {
            document.getElementById("result_emoji").innerHTML = "👌"
            document.getElementById("result_gesture_name").innerHTML = "Amazing"
            predect0 = "Amazing"
        }
        speak()

    }
}