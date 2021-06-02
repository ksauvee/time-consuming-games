function Paddle() {
    this.x = 10
    this.y = 30

    this.draw = function(board, ctx) {
        ctx.fillRect(this.x, this.y, 3, 20)
    }
}


function Ball() {
    this.x = 50
    this.y = 50
    this.velX = 2

    this.draw = function (board, player, ctx) {
        this.move(board, player)
        ctx.arc(this.x, this.y, 3, 0, 2 * Math.PI)
        ctx.fill()
    }

    this.move = function(board, player) {
        if (this.x + 3 >= board.width) {
            this.velX = -this.velX
        } else if (this.x - 5 <= player.x && this.y >= player.y && this.y <= player.y + 20) {
            this.velX = -this.velX
        }
        this.x += this.velX
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


function main() {
    const board = document.getElementById("board")
    const player = new Paddle()
    const ball = new Ball()

    document.addEventListener("keydown", (e) => {
        if (e.key === 'z') {
            player.y += 8
        } else if (e.key === 's') {
            player.y -= 8
        }
    })

    setInterval(function () {
        draw(player, ball, board)
    }, 1000/60)
}


main()
