//캔버스 세팅
let canvas;
let ctx;    //이미지를 도와줄 변수

canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);


let backgroundImg, spaceshipImg, bulletImg, enemyImg, gameoverImg;
let spaceshipX = canvas.width / 2 - 20; //좌표가 계속해서 변하기 때문에 따로 지정
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

let keysDown = {}
function setupKeyboard() {
    document.addEventListener("keydown", function (event) {
        //console.log("key 정보", event.key)
        keysDown[event.key] = true
        console.log(keysDown)
    });
    document.addEventListener("keyup", function (event) { //버튼을 때는 순간 key값은 사라져야함
        delete keysDown[event.key]

    })
}

function update() {
    if ("ArrowRight" in keysDown) {
        spaceshipX += 5;
        if (spaceshipX >= canvas.width-40) {
            spaceshipX = canvas.width-40;
        }
    }
    if ("ArrowLeft" in keysDown) {
        spaceshipX -= 5;
        if (spaceshipX <= 0) {
            spaceshipX = 0;
        }
    }
    if ("ArrowUp" in keysDown) {
        spaceshipY -= 5;
        if (spaceshipY <= 0) {
            spaceshipY = 0;
        }
    }
    if ("ArrowDown" in keysDown) {
        spaceshipY += 5;
        if (spaceshipY >= canvas.height - 40) {
            spaceshipY = canvas.height - 40;
        }
    }
}

function render() {
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(spaceshipImg, spaceshipX, spaceshipY)

}

function main() {    //이미지를 계속 보여주기 위해 사용
    update();
    render();
    requestAnimationFrame(main)
}

loadImage();
setupKeyboard();
render();   //캠버스에 이미지를 보여줄거면 계속해서 보여줘야한다.
main();