img = ""


function preload() {
    img = loadImage("desk.jpg");
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
    text("Desk", 400, 70, 20);
    noFill();
    rect(40, 20,570, 380);
}
