(function () {
        let width = document.documentElement.clientWidth;
        let height = document.documentElement.clientHeight;
        let baseVelocity = 7;
        let velocityX = Math.round(baseVelocity / 1.414);
        let velocityY = Math.round(baseVelocity / 1.414);
        let ballX = 500, ballY = 520;
        const ball = document.createElement('div');
        ball.style = 'position: absolute; width: 20px; height: 20px; background: green; left: 500px; top: 500px;';
        document.body.appendChild(ball);
        setInterval(moveBall, 10);

        function moveBall() {
            ballX += velocityX;
            ballY += velocityY;
            checkBallLimits();
            ball.style.left = ballX + 'px';
            ball.style.top = ballY + 'px';
        }
        function checkBallLimits() {
            if (ballY < 20) {
                velocityY = -velocityY;
            }

            if (ballX > width - 20 || ballX < 20) {
                velocityX = -velocityX;
            }
            if (ballY > height - 10) {
                velocityY = -velocityY;
                return 1;
            }
        }
    }
)();