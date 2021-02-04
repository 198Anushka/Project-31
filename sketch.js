function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  ground = new Ground(200,750,480,30)
}
var particles = [];
var plinko = [];
var divisions = [];
var divisionHeight=300;
for(var k = 0;k<=width;k=k+80){
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
}
for(var j=40; j<=width;j=j+50)
{
  plinko.push(new Plinko(j,75))
}
for(var j=15; j<=width-10;j=j+50)
{
  plinko.push(new Plinko(j,175))
}
for(var j=40; j<=width;j=j+50)
{
  plinko.push(new Plinko(j,75))
}
for(var j=15; j<=width-10;j=j+50)
{
  plinko.push(new Plinko(j,175))
}
if(frameCount%90===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10))
}
for(var j=0;j<particles.length;j++){
  particles[j].display;
}
function draw() {
  background(255,255,255);  

  ground.display();
  drawSprites();
  
}