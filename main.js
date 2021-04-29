function setup(){
    canvas=createCanvas(300,300)
    canvas.position(500,200)
    video=createCapture(VIDEO)
    video.size(300,300)
  posenet=ml5.poseNet(video, modelLoaded)
  posenet.on('pose',Gotposes)
}

function modelLoaded(){
    console.log("Model is loaded")
}


function draw(){
    background( rgb(73, 94, 150))
}


function Gotposes(poses,error){
    if(error){
        console.error(error);
    }
    else{
        console.log(poses);
    }
}
