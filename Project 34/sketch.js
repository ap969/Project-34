var dog, happyDog,dogimg,happyDogimg;
var foodS, foodStock;
var database;

function preload() {
dogimg = loadImage('images/dogImg.png');
happyDogimg = loadImage('images/dogImg1.png');
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,10,10);
  dog.addImage("dog",dogimg);
  dog.scale = 0.25; 
    foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);
}


function draw() {  
background(46,139,87);
if (keyWentDown(UP_ARROW)) {
  //dog.hide();
  writeStock(foodS);
  dog.addImage("dog",happyDogimg);
  
}
drawSprites();
  textSize(15);
  strokeWeight(3);
  fill("red");
  text("Note: Press UP_Arrow key to feed the dog");

}

  
  



function readStock(data) {
  foodS=data.val();
}

function writeStock(x) {

  if (x<=0) {
    x=0;
  }
    else {
    x=x-1;
    }

database.ref('/').update({
  Food:x
})
}



