var imgChao;
var posicaoChaoX = 0;
var imgFundo;
var posicaoFundoX = 0;
var imgsDino = [];
var imgDinoAtual = 0;

function preload() {
    imgChao = loadImage('assets/chao.png');
    imgFundo = loadImage('assets/bg.jpeg');
    for (var i = 1; i <= 8; i++) {
        imgsDino.push(loadImage(`assets/dino/${i}.png`));
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    inicioPuloY = windowHeight * 0.57;
}

function draw() {
    moverFundo();
    moverChao();
    animarDino();
}

function animarDino() {
    image(imgsDino[imgDinoAtual], windowWidth * 0.1, windowHeight * 0.57, windowHeight * 0.32, windowHeight * 0.3);

    if (frameCount % 6 === 0) {
        imgDinoAtual = (imgDinoAtual + 1) % imgsDino.length;
    }
}

function moverChao() {
    image(imgChao, posicaoChaoX, 0, windowWidth, windowHeight);
    image(imgChao, posicaoChaoX + width, 0, windowWidth, windowHeight);

    posicaoChaoX -= 5;
    if (posicaoChaoX < -width) {
        posicaoChaoX = 0;
    }
}

function moverFundo() {
    var posY = (windowHeight / 6 ) * -1;
    image(imgFundo, posicaoFundoX, posY, windowWidth, windowHeight);
    image(imgFundo, posicaoFundoX + width, posY, windowWidth, windowHeight);

    posicaoFundoX -= 0.5;

    if (posicaoFundoX < -width) {
        posicaoFundoX = 0;
    }
}
