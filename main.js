function startidentification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/JC3NVXTYG/model.json",modelLoaded)
}
function modelLoaded(){
classifier.classify(gotResults)
}
function gotResults(error,result){
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
}