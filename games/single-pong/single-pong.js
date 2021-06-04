function Paddle() {
    this.x = 10
    this.y = 30

    this.getY = function () {
        return this.y
    }

    this.setY = function(y) {
        this.y = y
    }

    this.draw = function(board, ctx) {
        ctx.fillRect(this.x, this.y, 3, 30)
    }
}


function Ball() {
    this.x = 50
    this.y = 50
    this.velX = 2
    this.velY = 0.5

    this.draw = function (board, player, ctx, counter, points) {
        points = this.move(board, player, counter, points)
        ctx.arc(this.x, this.y, 3, 0, 2 * Math.PI)
        ctx.fill()
        return points
    }

    this.move = function(board, player, counter, points) {
        if (this.x + 5 >= board.width) {
            // case hit right wall
            this.velX = -this.velX
        } else if (this.x - 5 <= player.x && this.x - 10 > 0 && this.y >= player.y && this.y <= player.y + 30) {
            // case hit paddle
            this.velX = -this.velX
            points += 1
            counter.innerHTML = 'Points : ' + points
        } else if (this.y + 5 >= board.height || this.y - 5 <= 0) {
            // case hit horizontal walls
            this.velY = -this.velY
        } else if (this.x - 5 <= 0) {
            // case hit left wall
            this.velX = 0
            this.velY = 0
            this.x = -5
            this.y = -5
            clearInterval()
            const results = document.getElementById('results')
            const retry = document.getElementById('retry')
            endingMessage(results, retry, points)
        }
        this.x += this.velX
        this.y += this.velY
        return points
    }
}


function draw(player, ball, board, counter, points) {
    const ctx = board.getContext("2d")
    ctx.fillStyle = "#006e81"
    ctx.beginPath()
    ctx.clearRect(0, 0, board.width, board.height)
    player.draw(board, ctx)
    points = ball.draw(board, player, ctx, counter, points)
    return points
}


function stylizeEndingMessage(element) {
    element.style.backgroundColor = "#425664"
    element.style.color = "white"
    element.style.display = "block"
}


function endingMessage(results, retry, points) {
    document.getElementById("counter").style.opacity = "0.2"
    document.getElementsByTagName("header")[0].style.opacity = "0.2"
    document.getElementsByTagName("canvas")[0].style.opacity = "0.2"

    results.innerHTML = "You got " + points + " points !"
    stylizeEndingMessage(results)
    retry.innerHTML = "Retry"
    stylizeEndingMessage(retry)
    retry.onclick = function() {window.location.reload()}
}


function main() {
    const board = document.getElementById("board")
    const player = new Paddle()
    const ball = new Ball()
    const counter = document.getElementById("counter")
    let points = 0

    document.addEventListener("keydown", (e) => {
        if (e.key === 'z') {
            if (player.getY() < board.height - 30) {
                player.setY(player.getY() + 15)
            }
        } else if (e.key === 's') {
            if (player.getY() > 0) {
                player.setY(player.getY() - 15)
            }
        }
    })

    setInterval(function () {
        points = draw(player, ball, board, counter, points)
    }, 1000/60)
}


main()
