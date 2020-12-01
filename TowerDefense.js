const canvas = document.getElementById('gameScreen');
const ctx = canvas.getContext('2d');

ctx.imageSmoothingEnabled = false;
let shopReady = false;
const shopImage = new Image();
let ready = true;
let fakeamount = 0;
let fakelevel = 0;
let i = 0;
let j = 0;
let k = 0;
let jeff;
let buttton;
let enemyx = [];
let enemyy = [];
let enemyspeed = [];
let enemylevel = [];
let enemyheck = [];
let mouseX = 0;
let mouseY = 0;
let mouseClick = 0;
const rect = canvas.getBoundingClientRect();
let hover = 'null';
let buttons = 0;
let stopp = 'null';

shopImage.onload = function() {
  shopReady = true;
};
shopImage.src = 'Shope.png';

function shop(){
  buttons = 0;
  ctx.fillStyle = '#2E2E2E';
  ctx.fillRect(0,500,500,100);
  ctx.drawImage(shopImage,5,505,46,14);
  buttton = new button(20,535,1,'#3B3B3B',50,50);
  buttton = new button(105,535,2,'#3B3B3B',50,50);
};

class button {
  constructor(x,y,number,color,width,height){
    buttons ++;
    ctx.fillStyle = color;
    this.number = number;
    ctx.fillRect(x,y,width,height)
    mouseTouchingButton(mouseX,mouseY,number,x,y,width,height);
  };
};

function mouseTouchingButton(mouseXPosition,MouseYPosition,number,buttonX,buttonY,buttonWidth,buttonHeight){
  if(mouseXPosition >= buttonX && mouseXPosition <= (buttonX + buttonWidth) && MouseYPosition >= buttonY && MouseYPosition <= (buttonY + buttonHeight)){
    if(mouseClick ===  1){
      console.log(number);
    }
  }
};

function makePaths (){
  ctx.fillStyle = "#ff8800";
  ctx.fillRect(40,0,20,450);
  ctx.fillRect(60,430,400,20);
  ctx.fillRect(440,50,20,380);
  ctx.fillRect(100,30,360,20);
  ctx.fillRect(100,50,20,340);
  ctx.fillRect(100,370,300,20);
  ctx.fillRect(380,110,20,280);
  ctx.fillRect(160,90,240,20);
  ctx.fillRect(160,90,20,220);
  ctx.fillRect(160,310,340,20);
};

class Enemy {
  constructor(x,y,speed,level){
    enemyx.push(x);
    enemyy.push(y);
    enemyspeed.push(speed);
    enemylevel.push(level);
  };
};

function render(){
  
  for (let i = 0; i < enemyx.length; i++) {
      if(enemyx[i] === 42.5){
        enemyy[i] = enemyspeed[i] + enemyy[i];
      };
    if (enemyy[i] >= 432.5){
      enemyy[i] = 432.5;
      enemyx[i] += enemyspeed[i];
    };
    if (enemyy[i] ===  432.5 && enemyx[i] > 442.5) {
      enemyx[i] = 442.5;
      enemyy[i] -= enemyspeed[i];
    };
    if(enemyy[i] < 432.5 && enemyx[i] ===  442.5 && enemyy[i] > 32.5){
      enemyy[i] -= enemyspeed[i];
    };
    if(enemyy[i] <= 32.5 && enemyx[i] <=  442.5 && enemyx[i]> 50){
      enemyy[i] = 32.5;
      enemyx[i] -= enemyspeed[i];
    };
    if(enemyx[i] <=  102.5 && enemyy[i] ===  32.5 && enemyx[i] > 45){
      enemyx[i] = 102.5;
      enemyy[i] += enemyspeed[i];
    };
    if(enemyx[i] ===  102.5 && enemyy[i] >= 32.5){
      enemyy[i] += enemyspeed[i];
    };
    if(enemyy[i] >= 372.5 && enemyx[i] === 102.5 && enemyy[i] < 432.5){
      enemyy[i] = 372.5;
      enemyx[i] += enemyspeed[i];
    };
    if(enemyy[i] ===  372.5 && enemyx[i] >= 102.5 && enemyx[i] < 442.5){
      enemyy[i] = 372.5;
      enemyx[i] += enemyspeed[i];
    };
    if(enemyx[i] >= 382.5 && enemyx[i] <= 422.5 && enemyy[i] ===  372.5){
      enemyx[i] = 382.5;
      enemyy[i] -= enemyspeed[i];
    };
    if(enemyx[i] ===  382.5 && enemyy[i] < 372.5){
      enemyx[i] = 382.5;
      enemyy[i] -= enemyspeed[i];
    };
    if(enemyx[i] ===  382.5 && enemyy[i] <= 93.5 && enemyy[i] > 32.5){
      enemyx[i] -= enemyspeed[i];
      enemyy[i] = 93.5;
    };
    if(enemyx[i] <=  382.5 && enemyx[i] > 140 && enemyy[i] ===  93.5){
      enemyx[i] -= enemyspeed[i];
      enemyy[i] = 93.5;
    };
    if(enemyx[i] <= 162.5 && enemyy[i] ===  93.5){
      enemyx[i] = 162.5;
      enemyy[i] += enemyspeed[i]
    };
    if(enemyx[i] ===  162.5 && enemyy[i] > 93.5 && enemyy[i] < 360){
      enemyy[i] += enemyspeed[i];
    };
    if(enemyy[i] >= 312.5 && enemyx[i] ===  162.5 && enemyy[i] < 325){
      enemyx[i] += enemyspeed[i];
      enemyy[i] = 312.5;
      enemyheck.push(i);
    };
    if(enemyy[i] ===  312.5 && enemyx[i] >=  162.5){
      if(enemyheck.includes(i)){
        enemyx[i] += enemyspeed[i];
      };
    };

    ctx.fillStyle = '#5eff00';
    ctx.fillRect(enemyx[i],enemyy[i],15,15);
  };
};

jeff = new Enemy(42.5,-5,3,1);

function sendWave (amount, level){
  fakeamount = amount;
  fakelevel = level;
};

function loop(){
  ctx.fillStyle = '#000000';
  ctx.fillRect(0,0,500,500);
  shop();
  makePaths();
  render();
  if(ready ===  true){
    k = 0;
    sendWave(10, 1);
  };
  if(k != fakeamount){
    ready = false
    if (j > 34){
      jeff = new Enemy(42.5,-5,3,fakelevel);
      j = 0;
      k++
    };
    j++;
  }else {
    ready = 'poooo';
  };
  window.addEventListener('mousemove', function (e) {
    mouseX = e.pageX - rect.left;
    mouseY = e.pageY - rect.top;
    mouseClick = e.which;
  });
  window.requestAnimationFrame(loop)
};

makePaths();

window.requestAnimationFrame(loop);