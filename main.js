music="";
song="";
rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;

function preload()  {
sound= loadSound("Shiv Tandav Stotram.mp3");
song= loadSound("English song.mp3");
}
function setup()    {
    canvas= createCanvas(600,600);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()  {
    console.log("Pose Net has been initialized");
}
function draw() {
    image(video,0,0,600,600);
}

function gotPoses(results)  {
    if (results.length >0)  {
        rightWristX= results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y;
        leftWristX= results[0].pose.leftWrist.x;
        leftWristY= results[0].pose.leftWrist.y;
    }
}