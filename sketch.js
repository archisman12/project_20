var backGround,backGroundImage
var catImage,cat;
var mouseImage,mouse;

function preload() {
    //load the images here
    backGroundImage=loadImage("garden.png")
    catImage=loadAnimation("tomTwo.png","tomThree.png")
    mouseImage=loadAnimation("jerryTwo.png","jerryThree.png")
    catOneImage=loadImage("tomOne.png")
    mouseOneImage=loadImage("jerryOne.png")
    catFourImage=loadImage("tomFour.png")
    mouseFourImage=loadImage("jerryFour.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    backGround=createSprite(500,400)
    backGround.addImage(backGroundImage)

    cat=createSprite(720,620)
    cat.addImage(catOneImage)
    cat.scale=0.2;
   

    mouse=createSprite(215,650)
    mouse.addImage(mouseOneImage)
    mouse.scale=0.1;
   

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<(cat.width-mouse.width/2)){
        cat.velocityX=0;
        cat.addAnimation("catStanding",catFourImage)
        cat.changeAnimation("catStanding")
        mouse.addAnimation("mouseChasing",mouseFourImage)
        mouse.changeAnimation("mouseChasing")
    }
   


    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
cat.velocityX=-5
cat.addAnimation("catRunning",catImage);
cat.changeAnimation("catRunning")
mouse.addAnimation("mouseStanding",mouseImage)
mouse.changeAnimation("mouseStanding")

}

}
