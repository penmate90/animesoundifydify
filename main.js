nem=null;

function start() {
    navigator.mediaDevices.getUserMedia({audio: true});

    classify=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/W1NmyqWGP/model.json', redy)
}

function redy() {
    console.log("redy");
    classify.classify(gotresult);
}

function gotresult(results, error) {
    r=Math.floor(Math.random()*255)
    g=Math.floor(Math.random()*255)
    b=Math.floor(Math.random()*255)
      console.log(error);  
      nem=error[0].label;
      conf=Math.floor(error[0].confidence*100)+"%"
      document.getElementById("sound_info").style.color=(r,g,b);
      if (nem=="woof") {
          document.getElementById("sound_info").innerHTML="I can hear-Dog "+conf;
          document.getElementById("img").src="dog.gif"
      } else if(nem=="mow") {
        document.getElementById("sound_info").innerHTML="I can hear-cat "+conf;
        document.getElementById("img").src="cat.gif"
      }
      else if(nem=="MOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOoo") {
        document.getElementById("sound_info").innerHTML="I can hear-Cow "+conf;
        document.getElementById("img").src="cow.gif"
      }
      else if(nem=="ROAARRRRR") {
        document.getElementById("sound_info").innerHTML="I can hear-Lion "+conf;
        document.getElementById("img").src="lio.gif"
      }
      else{
        document.getElementById("sound_info").innerHTML="I can hear-Background noise "+conf;
        document.getElementById("img").src="nois.gif"
      }
   
}