function Paddle() {
    this.x = 10
    this.y = 30

    this.draw = function(board, ctx) {
        ctx.fillRect(this.x, this.y, 3, 30)
    }
}


function Ball() {
    this.x = 50
    this.y = 50
    this.velX = 2
    this.velY = 2
    this.points = 0

    this.draw = function (board, player, ctx) {
        this.move(board, player)
        ctx.arc(this.x, this.y, 3, 0, 2 * Math.PI)
        ctx.fill()
    }

    this.move = function(board, player) {
        if (this.x + 5 >= board.width) {
            this.velX = -this.velX
        } else if (this.x - 5 <= player.x && this.y >= player.y && this.y <= player.y + 30) {
            this.velX = -this.velX
            this.points += 1
        } else if (this.y + 5 >= board.height || this.y - 5 <= 0) {
            this.velY = -this.velY
        } else if (this.x <= 0) {
            this.velX = 0
            this.velY = 0
            this.x = -5
            this.y = -5
            clearInterval()
            const results = document.getElementById('results')
            const retry = document.getElementById('retry')
            endingMessage(results, retry, this.points)
        }
        this.x += this.velX
        this.y += this.velY
    }
}


function draw(player, ball, board) {
    const ctx = board.getContext("2d")
    ctx.fillStyle = "#006e81"
    ctx.beginPath()
    ctx.clearRect(0, 0, board.width, board.height)
    player.draw(board, ctx)
    ball.draw(board, player, ctx)
}


function endingMessage(results, retry, points) {
    document.getElementsByTagName("header")[0].style.opacity = "0.2"
    document.getElementsByTagName("canvas")[0].style.opacity = "0.2"
    results.innerHTML = "You got " + points + " points !"
    results.style.backgroundColor = "#425664"
    results.style.color = "white"
    results.style.display = "block"
    retry.innerHTML = "Retry"
    retry.style.backgroundColor = "#425664"
    retry.style.color = "white"
    retry.style.display = "block"
    retry.onclick = function() {window.location.reload()}
}


function main() {
    const board = document.getElementById("board")
    const player = new Paddle()
    const ball = new Ball()

    document.addEventListener("keydown", (e) => {
        if (e.key === 'z') {
            if (player.y < board.height - 30) {
                player.y += 15
            }
        } else if (e.key === 's') {
            if (player.y > 0) {
                player.y -= 15
            }
        }
    })

    setInterval(function () {
        draw(player, ball, board)
    }, 1000/60)
}


main()
