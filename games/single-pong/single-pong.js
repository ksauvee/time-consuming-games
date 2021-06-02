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

    this.draw = function(board, ctx) {
        ctx.arc(this.x, this.y, 3, 0, 2 * Math.PI)
        ctx.fill()
    }
}


function draw(player, ball, board) {
    const ctx = board.getContext("2d")
    ctx.fillStyle = "#006e81"
    ctx.beginPath()
    ctx.clearRect(0, 0, board.width, board.height)
    player.draw(board, ctx)
    ball.draw(board, ctx)
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
    }, 0.001)
}


main()
