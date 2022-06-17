mustacheX= 0;
mustacheY= 0;

function preload(){
    mustacheImage= loadImage("https://postimg.cc/p5MSKc7J");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();

    video = createCapture(VIDEO)
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}
function draw(){
    image(video,0,0,300,300);
    image(mustacheImage,mustacheX,mustacheY,30,30);
}
function modelLoaded(){
    console.log("Model is loaded");
}
function gotPoses(results){
console.log(results);

mustacheX= results[0].pose.mouth.x;
mustacheY= results[0].pose.mouth.y;

console.log(mustacheX, mustacheY);
}

function take_snapshot(){
   save("mustache_shot.jpg") 
}