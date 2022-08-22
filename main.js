function startRecognition(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/kJJPOx0Tv/model.json", ModelLoaded);
}

function ModelLoaded(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
        random_red=Math.floor(Math.random()*255)+1;
        random_green=Math.floor(Math.random()*255)+1;
        random_blue=Math.floor(Math.random()*255)+1;
        document.getElementById("body_label").innerHTML="Sound Detected is -"+results[0].label;
        document.getElementById("body_accuracy_display").innerHTML="Accuracy -"+(results[0].confidence*100).toFixed(4)+"%";
        document.getElementById("body_label").style.color="rgb("+random_red+", "+random_green+", "+random_blue+")";
        document.getElementById("body_accuracy_display").style.color="rgb("+random_red+", "+random_green+", "+random_blue+")";



        img1=document.getElementById("IMG1DISPLAY");
        img2=document.getElementById("IMG2DISPLAY");
        img3=document.getElementById("IMG3DISPLAY");
        img4=document.getElementById("IMG4DISPLAY");

        if (results[0].label=="Clap"){
            img1.src="aliens-01.gif";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }
        else if (results[0].label=="Thud"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.gif";
            img3.src="aliens-03.png";
            img4.src="aliens-04.png";
        }
        else if (results[0].label=="MouseClick"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.gif";
            img4.src="aliens-04.png";
        }
        else {
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.gif";
        }
    }
}