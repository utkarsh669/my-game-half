var bgimg;
var boy1,boy1img,boy2,boy2img
var gun1,gun1img,gun2img,gun2,









function preload(){
bgimg=loadImage("background.gif")
boy1img=loadImage("boy1.png")
boy2img=loadImage("boy2.png")
gun1img=loadImage("gun1.gif")
gun2img=loadImage("gun2.gif")


}

function setup() {
  createCanvas(1200, 800);
boy1=createSprite(1200,400,80,80)
boy2=createSprite(100,400,80,80)
gun1=createSprite(1250,400,80,80)
gun2=createSprite(150,400,80,80)



boy2.scale=0.7
boy1.scale=0.7
gun1.scale=0.3
gun2.scale=0.3


boy1.addImage(boy1img)
boy2.addImage(boy2img)
gun1.addImage(gun1img)
gun2.addImage(gun2img)



  
 
  
}

function draw() {
  background(bgimg);
  
  drawSprites();
  
}



  
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -(6 + Math.round(score/100));
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    
    switch(rand){
      case 1: obstacle.addImage("Sprites/obstacle1", obstacleImages1);
        break;
        
      case 2: obstacle.addImage("Sprites/obstacle2",obstacleImages2);
        break;
        
      case 3: obstacle.addImage("Sprites/obstacle3",obstacleImages3);
        break;
        
      case 4: obstacle.addImage("Sprites/obstacle4",obstacleImages4);
        break;
        
      case 5: obstacle.addImage("Sprites/obstacle5",obstacleImages5);
        break;
        
      case 6: obstacle.addImage("Sprites/obstacle6",obstacleImages6);
        break;
        
      default: break; 
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;
    
    GroupObstacles.add(obstacle);
  }
}

  
