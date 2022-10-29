let video, model, img;
let x=0;
let y=0;

function preload(){
  img = loadImage('spider.png');
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  model = ml5.poseNet(video, ready);
  model.on('pose', gotResult);
}

function ready() {
  console.log("준비완료")
}

function draw() {
  background(220);
  image(video, 0, 0);
  image(img, x-120, y-120, 230, 230);
}

function gotResult(result) {
  console.log(result);
  if(result.length>0){
    x = result[0].pose.nose.x;
    y = result[0].pose.nose.y;
  }
}