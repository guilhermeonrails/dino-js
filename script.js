var chaoImg
var posicaoXChao = 0
var backgroundImg
var posicaoXBackground = 0
var dinoImgs = []
var dinoImgAtual = 0

function preload() {
    chaoImg = loadImage('assets/floor.png')
    backgroundImg = loadImage('assets/bg.jpeg')
    for (var i = 1; i <= 8; i++) {
        dinoImgs.push(loadImage(`assets/dino/${i}.png`))
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    movaBackground()
    moverChao()
    animarDino()
}

function animarDino() {
    image(dinoImgs[dinoImgAtual], windowWidth/10, windowHeight *0.7, windowWidth * 0.25, windowWidth * 0.25)

    if (frameCount % 6 === 0) {
        dinoImgAtual = (dinoImgAtual + 1) % dinoImgs.length
    }
}


function moverChao() {
    image(chaoImg, posicaoXChao,         0, windowWidth, windowHeight)
    image(chaoImg, posicaoXChao + width, 0, windowWidth, windowHeight)

    posicaoXChao -= 5
    if (posicaoXChao < -width) {
        posicaoXChao = 0
    }
}

function movaBackground() {
    var posY = (windowHeight / 6 ) * -1
    image(backgroundImg, posicaoXBackground, posY, windowWidth, windowHeight )
    image(backgroundImg, posicaoXBackground + width, posY, windowWidth, windowHeight )

    // posicaoXBackground = posicaoXBackground - 2
    posicaoXBackground -= 0.5

    if (posicaoXBackground < -width) {
        posicaoXBackground = 0
    }
}