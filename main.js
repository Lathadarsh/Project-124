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
}
function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
    }
}