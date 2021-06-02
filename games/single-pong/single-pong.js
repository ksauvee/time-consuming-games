function Paddle() {
    this.x = 10
    this.y = 30

    this.draw = function(board) {
        const ctx = board.getContext("2d")
        console.log(this.y)
        ctx.beginPath()
        ctx.clearRect(0, 0, 1400, 600)
        ctx.fillStyle = "#006e81"
        ctx.fillRect(this.x, this.y, 3, 20)
    }
}


function main() {
    const board = document.getElementById("board")
    const player = new Paddle()

    document.addEventListener("keydown", (e) => {
        if (e.key === 'z') {
            player.y += 8
        } else if (e.key === 's') {
            player.y -= 8
        }
    })

    setInterval(function () {player.draw(board)}, 0.001)
}


main()
