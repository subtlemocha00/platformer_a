document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    const gameWidth = canvas.width;
    const gameHeight = canvas.height;

    // game variables
    const gravity = 0.5;
    const walkSpeed = 15;
    const jumpSpeed = 15;
    const player = {
        x: 50,
        y: 50,
        width: 30,
        height: 30,
        speedX: 0,
        speedY: 0,
        color: '#099',
    }

    function update() {
        // update player position
        player.speedY += gravity;
        player.y += player.speedY;

        // floor collision
        if (player.y + player.height > gameHeight) {
            player.y = gameHeight - player.height;
            player.speedY = 0;
        }

        // wall collision right
        if (player.x + player.width > gameWidth) {
            player.x = gameWidth - player.width;
            player.speedX = 0;
        }
        // wall collision left
        if (player.x < 0) {
            player.x = 0;
            player.speedX = 0;
        }
    }

    document.addEventListener('keydown', (e) => move(e))


    function move({ keyCode }) {
        // KEY CODES: 
        // ArrowRight = 39, 'd' = 68
        // ArrowLeft = 37, 'a' = 65

        // ArrowUp = 38, 'w' = 83
        // ArrowDown = 40, 's' = 87
        // Space = 32
        // Enter = 13
        // Move Right
        if (keyCode === 37 || keyCode === 65) moveLeft()
        if (keyCode === 39 || keyCode === 68) moveRight()
        if (keyCode === 38 || keyCode === 83) moveUp()
        gameLoop();
    }
    function moveLeft() {
        player.speedX = -walkSpeed;
        player.x += player.speedX;
    }
    function moveRight() {
        player.speedX = walkSpeed;
        player.x += player.speedX;
    }
    function moveUp() {
        console.log('jump!')
        player.speedY -= jumpSpeed;
        player.speedY += gravity;
    }

    function draw() {
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x, player.y, player.width, player.height)
    }

    function gameLoop() {
        ctx.clearRect(0, 0, gameWidth, gameHeight);
        update();
        draw();
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
});