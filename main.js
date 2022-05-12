function start() {
    navigator.mediaDevices.getUserMedia({audio: true});

    classify=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/W1NmyqWGP/model.json', redy)
}

function redy() {
    console.log("redy");
    classify.classify(gotresult);
}

function gotresult(results, error) {
    if (error) {
      console.error(error);  
    } else {
        
    }
}