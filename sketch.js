const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies

var particles = [];
var score = 0;
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var particle;


function setup() {



  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  for(var j = 0; j < particles.length; j++) {

    particles[j].display();
  }
  for(var k= 0; k <divisions.length; k++) {
divisions[k].display();

  }
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))
    }
for (var j = 40; j <=width; j = j+50){
plinkos.push(new Plinko(j,75))
}
for (var j = 15; j <=width-10; j = j+50){
  plinkos.push(new Plinko(j,175))
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10))
  }
  
}

function draw() {


  background(0);  
  drawSprites();
}

function mousePressed(){
  if(particle!=null){
    particle,display();
    if(particle.body.position.y>760)
    {
          if(particle.body.position.x < 300)
          {
    
              score=score+500;
              particle=null;
              if(count>=5) gamestate ="end";
          }
    }
    
      }
if(gameState!=="end")
{

  count++;
  particle=new Particle(mouseX, 10, 10, 10);
}
}