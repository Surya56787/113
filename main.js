function preload(){
    img=loadImage("https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg");

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(150,250);
}

function draw(){
image(img,250,100,50,50);
circle(200,200,70);
stroke("green");
fill("purple");
rect(100,20,50,25);

}