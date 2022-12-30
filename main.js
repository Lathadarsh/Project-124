noseX=0;
noseY=0;
leftWristX= 0;
rightWristX= 0;
difference = 0;
function preload() {

}

function setup() 
{
video=createCapture(VIDEO);
video.size(550,500);
video.position(160,100);

canvas=createCanvas(550,550);
canvas.position(760,100);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet is initialized');
}

function draw() {
    background('#00FFFF');
    fill("pink");
    stroke("red");
    textSize(difference);
    text('Adarsh', noseX, noseY);
    
    document.getElementById("text_size").innerHTML = "The size of the text will be = " + difference +" px";
}
function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose X = " + noseX + "Nose Y = " + noseY );

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist X = " + leftWristX + "Right Wrist X = " + rightWristX + "Difference = " + difference);
    }
}