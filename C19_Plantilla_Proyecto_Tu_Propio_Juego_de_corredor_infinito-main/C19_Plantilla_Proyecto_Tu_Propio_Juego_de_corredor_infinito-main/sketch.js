var ocean ;
var axolotl;
var prismarine;
var oceanImg, axolotlImg, prismarineImg;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
backgroundImg = loadImage("Fondo de proyecto.jpg");
axolotlImg = loadImage("AJOLOTE PROYECTO.png");
prismarineImg = loadImage("obsyaculo proyecto.gif");
}

function setup() {
    createCanvas(400,600);
    ocean=createSprite(200,200);z>
    ocean.addImage(oceanImg);
    ocean.velocityY = 4;
    
    axolotl=createSprite(100,100);
    axolotl.addImage(axolotlImg);
    axolotl.x = World.mouseX;
}

function draw() {

    backgroundImg(backgroundImg);

    Engine.update(engine);

    drawsprites();

    if(gameState===PLAY){
        background(0);


        if(ocean.y > 400 ){
            ocean.y = height/2;
          }

    edges= createEdgeSprites();
    axolotl.collide(edges);

    prismarine=new Group();

    if(prismarine.isTouching(axolotl)) {
        gameState=END;


        function createprismarine(){
            if (World.frameCount % 530 == 0) {
            var prismarine = createSprite(Math.round(random(50, 350),40, 10, 10));
            prismarine.addImage(prismarineImg);
            prismarine.scale=0.1;
            prismarine.velocityY = 3;
            prismarine.lifetime = 150;
            prismarineGroup.add();
            }
          }

    axolotl.x=200;
    axolotl.y=300;
    axolotl.scale=0.06;
  }
 }
}

