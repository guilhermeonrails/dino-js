var floorImg;
var floorPositionX = 0;
var backgroundImg;
var backgroundPositionX = 0;
var dinoImgs = [];
var currentDinoImg = 0;
var cactusImgs = []
var posXCactus

var jumping = false;
var jumpStartY;
var ySpeed;
var gravity = 1
var posYDino = 0.67
var velocidade = 15

function preload() {
    floorImg = loadImage('assets/floor.png');
    backgroundImg = loadImage('assets/bg.jpeg');
    
    for (var i = 1; i <= 2; i++) {
        cactusImgs.push(loadImage(`assets/cactus/cactus${i}.png`))
    }

    for (var i = 1; i <= 8; i++) {
        dinoImgs.push(loadImage(`assets/dino/${i}.png`));
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    jumpStartY = windowHeight * posYDino
    ySpeed = 0 
    valorDoPulo = (-15 /windowHeight) * (windowHeight *2)
    posXCactus = windowWidth * 1.2
}

function draw() {
    background(0)
    moveBackground();
    moveFloor();
    animateCactus();
    animateDino();
    applyGravity();
}

function verificaColisao() {
    if (collideRectRect(img1X, img1Y, img1.width, img1.height, img2X, img2Y, img2.width, img2.height)) {
        noLoop();
    }
}

function animateCactus() {
    var posY = windowHeight * 0.65 
    var tamanho = posY / 3   
    image(cactusImgs[1], posXCactus, posY, tamanho, tamanho)

    posXCactus -= velocidade

    if (posXCactus < -width) {
        posXCactus = windowWidth * 1.2
    }
    
}

function animateDino() {
    var spriteDino;
    
    if (!jumping) {
        spriteDino = dinoImgs[currentDinoImg];
    } else {
        // Se está pulando, use a mesma sprite durante o salto
        spriteDino = dinoImgs[0];
    }
    
    image(spriteDino, windowWidth * 0.04, jumpStartY, windowWidth * 0.18, windowHeight * 0.2);

    if (!jumping && frameCount % 6 === 0) {
        currentDinoImg = (currentDinoImg + 1) % dinoImgs.length;
    }
}

function moveFloor() {
    var posY = windowHeight * .05
    image(floorImg, floorPositionX,         posY, windowWidth, windowHeight);
    image(floorImg, floorPositionX + width, posY, windowWidth, windowHeight);

    floorPositionX -= velocidade;
    if (floorPositionX < -width) {
        floorPositionX = 0;
    }
}

function moveBackground() {
    image(backgroundImg, backgroundPositionX,         10, windowWidth, windowHeight *0.8);
    image(backgroundImg, backgroundPositionX + width, 10, windowWidth, windowHeight *0.8);

    backgroundPositionX -= 0.3;

    if (backgroundPositionX < -width) {
        backgroundPositionX = 0;
    }
}

function applyGravity() {
    ySpeed += gravity;
    jumpStartY += ySpeed;

    if (jumpStartY > height * posYDino) {
      jumpStartY = height * posYDino;
      jumping = false;
    } else {
      jumping = true;
    }
}

function keyTyped() {
    if (!jumping && key === ' ') {
      ySpeed = valorDoPulo;
    }
  }

function mouseClicked() {
    if (!jumping) {
      ySpeed = valorDoPulo;
    }
  }