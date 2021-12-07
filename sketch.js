
var runner, runner_running, power;
var path, invisibleGround, groundImage;

function preload() {
  runner_running = loadAnimation("runner1.png", "runner2.png");
  runner_collided = loadImage("runner.png");

  pathImage = loadImage("path2.png")
}

function setup() {
createCanvas(600, 200);

//criar um sprite runner
runner = createSprite(50,160,20,50);
runner.addAnimation("running", runner_running);
runner.scale = 0.5;
  
//criar um sprite path
path = createSprite(200,180,400,20);
path.addImage("path",pathImage);
path.x = path.width /2;
path.velocityX = -4;

//criando solo invisivel
invisiblePath = createSprite (200,190,400,20);
invisiblePath.visible = false;
  
}

function draw() {
background(220);
console.log (runner.x)

//andar pro lado
if (keyDown("mouseY")&& runner.y >= 100) {
  runner.velocityX = -10;
}
trex
runner.velocityX = runner.velocityX + 0.7

if (path.x < 0) {
  runner.x = path.width / 2;
}

runner.collide(invisiblePath);
drawSprites();
}
