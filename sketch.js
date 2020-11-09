
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1

  ground = createSprite(400,350,900,10)
  
var FoodGroup = createGroup(); 
var obstaclesGroup = createGroup();
survivalTime=0;


}



function draw() {
 createCanvas(400,400)
  
  
  background("white")
   text("survivalTime: "+ survivalTime,200,50);
  textSize(20);
  survivalTime =  Math.round(frameCount/frameRate())    
  
  if(keyDown("space")&& monkey.y >=200) {
        monkey.velocityY = -13;
    }
  
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  FoodGroup();
  obstaclesGroup();
  
    monkey.collide(ground);
     
  drawSprites();
}
function FoodGroup(){
           
  if(frameCount % 80 === 0){
    banana = createSprite(400,100,40,10)
    banana.y=Math.round(random(120,200))
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    banana.lifetime=200;
    
  }
  
  
  
  
  
}
function obstaclesGroup(){
   if(frameCount % 100 === 0){
   obstacle = createSprite(400,322,20,20);
     obstacle.velocityX=-6;
     obstacle.addImage(obstacleImage)
     obstacle.scale=0.12;
   obstacle.lifetime=100
   
   obstacleGroup.add(obstacle)
   
   
   }
  
  
}






