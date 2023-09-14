//캔버스 세팅
let canvas;
let ctx;    //이미지를 도와줄 변수

canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);


let backgroundImg, spaceshipImg, bulletImg, enemyImg, gameoverImg;
let spaceshipX = canvas.width/2 - 20; //좌표가 계속해서 변하기 때문에 따로 지정
let spaceshipY = canvas.height - 40;

function loadImage() {
    backgroundImg = new Image();
    backgroundImg.src = "/img/background.gif"

    spaceshipImg = new Image();
    spaceshipImg.src = "/img/spaceship.png"

    bulletImg = new Image();
    bulletImg.src = "/img/bullet.png"

    enemyImg = new Image();
    enemyImg.src = "/img/enemy.png"

    gameoverImg = new Image();
    gameoverImg.src = "/img/gameover.png"
}

function render() {
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(spaceshipImg, spaceshipX, spaceshipY)

}

function main() {    //이미지를 계속 보여주기 위해 사용
    render();
    requestAnimationFrame(main)
}

loadImage();
render();   //캠버스에 이미지를 보여줄거면 계속해서 보여줘야한다.
main();