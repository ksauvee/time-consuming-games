function Paddle() {
    this.x = 10
    this.y = 30
    this.yspeed = 0

    this.move = function() {
        this.y += this.yspeed
    }

    this.draw = function(board) {
        const ctx = board.getContext("2d")
        ctx.beginPath()
        ctx.fillStyle = "#006e81"
        ctx.fillRect(this.x, this.y, 3, 20)
        ctx.stroke()
    }
}


function main() {
    const board = document.getElementById("board")
    const player = new Paddle()
    player.draw(board)
}


main()
