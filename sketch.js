var PLAY=1;
var END=0;
var gameState=1;

var sword, swordI;
var fruit, fruit1,fruit2,fruit3,fruit4, fruitGroup;
var enemy, enemyGroup;
var bombI;
var gameoverI


function preload(){
  
 swordI = loadImage("sword.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
 
  bombI = loadAnimation("alien1.png", "alien2.png");
  
  gameoverI = loadImage("gameover.png");
   
  gameoversound= loadSound("gameover.mp3");
  
  cuttingSound = loadSound("knifeSwooshSound.mp3");
}

function setup(){
 createCanvas(600,600);
 sword = createSprite(200,200,20,40);
  sword.addImage(swordI);
  sword.scale=0.7;
  
  score=0;
  
  fruitGroup=createGroup();
  enemyGroup=createGroup();
}

function draw(){
  background("lightblue");

  

  
  
  
  
  sword.debug=false;
  
  sword.setCollider("rectangle",0,0,40,40);
  
  if(gameState===PLAY){
    
   fruits();
   enemy();
    
      sword.x =World.mouseX
  sword.y =World.mouseY
    
      if (fruitGroup.isTouching(sword)){
        fruitGroup.destroyEach();
        
        score = score+1;
        
        cuttingSound.play();
      }
  

  
  }
  
  if(gameState===END){
    
    fruitGroup.velocityX=0;
    
    
  }
 else 
 {
   if(enemyGroup.isTouching(sword)){
     gameState = END;
     
     enemyGroup.destroyEach();
     enemyGroup.destroyEach();
     fruitGroup.setVelocityXEach(0);
     enemyGroup.setVelocityXEach(0);
     
     sword.addImage(gameoverI);
     
     gameoversound.play();
   }
 }


  text("Score:"+score, 500, 20);
  
drawSprites();

}

   
  function fruits () {
  if (World.frameCount%100===0) {
     position = Math.round(random(1,2));
     fruit = createSprite(400,200,20,20);
     fruit.scale=0.2;
     
     r = Math.round(random(1,4))
     if (r==1){
      fruit.addImage(fruit1);
     }
     else if(r==2){
      fruit.addImage(fruit2);
     }
     else if(r==3){
      fruit.addImage(fruit3);
     }
     else if(r==4){
      fruit.addImage(fruit4); 
     }
     if(position==1){
      fruit.x=400;
      fruit.velocityX = -(7+(score/4));       
     }
      else if (position==2){
      fruit.x=0
      fruit.velocityX = 7+(score/4); 
      } 
    fruit.y= Math.round(random(50,450));
    
  
    fruit.lifetime=100;
    
    fruitGroup.add(fruit);
  }
}

function enemy(){
  if(World.frameCount %200 === 0){
    bomb=createSprite(400,200,20,20);
    bomb.addAnimation("moving", bombI);
    bomb.y=Math.round(random(100,500));
    bomb.velocityX = -(8+(score/2));
    bomb.setLifetime = 50;
    
    enemyGroup.add(bomb);
    
    }
   }
  