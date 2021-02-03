var wall,car,weight,speed;

function setup(){
  createCanvas(1600,600);
   
car = createSprite(100,100,100,50);
car.shapeColor = "green";

wall = createSprite(1500,10,60,500);
wall.shapeColor =  "blue";

speed = random(55,90);
car.velocityX = speed;

weight = random(400,1500);

}

function draw(){
background(""); 

if(wall.x - car.x <  car.width/2+ wall.width/2){
car.velocityX = 0;

var deformation = 0.5 * weight * speed * speed/22500;

if (deformation>180){
  car.shapeColor = "yellow";
}

if(deformation < 180 && deformation >80){
  car.shapeColor = "red";
}

if(deformation < 80){
  car.shapeColor = "pink";
}

}

  drawSprites();
}