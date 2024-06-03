document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    const gameWidth = canvas.width;
    const gameHeight = canvas.height;

    // game variables
    const gravity = 0.5;
    const player = {
        x: 50,
        y: 50,
        width: 30,
        height: 30,
        speedX: 0,
        speedY: 0,
        color: '#FF0000',
    }

    function update() {
        // update player position
        player.speedY += gravity;
        player.y += player.speedY;
    
        // floor collision
        if (player.y + player.height > gameHeight){
            player.y = gameHeight - player.height;
            player.speedY = 0;
        }
        if (player.x + player.width > gameWidth){
            player.x = gameWidth - player.width;
            player.speedX = 0;
        }
        if (player.x === 0){
            player.speedX = 0;
        }
    }

    function moveHorizontal() {
        if () {}
    }
    
    function draw() {
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x, player.y, player.width, player.height)
    }

    function gameLoop() {
        ctx.clearRect(0,0, gameWidth, gameHeight);
        update();
        draw();
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
});