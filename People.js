img = ""


function preload() {
    img = loadImage("People.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded(){
    console.log("modelLoaded");
status = true;
objectDetector.detect(img,gotResult);
}
function gotResult(error,result){
if(error){
console.log(error);
}
else{
console.log(result);
}
}
function draw() {
    image(img, 0, 0, 640, 420);
    fill("#000000");
    stroke("black");
    text("Woman", 150, 100, 600);
    noFill();
    rect(120, 5,150, 405);
    
  
    text("Man", 470, 100, 600);
    noFill();
    rect(350, 5,150, 405);
}
