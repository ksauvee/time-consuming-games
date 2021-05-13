const add = document.getElementById("add")


function addGameSuggestion() {
    const title = document.getElementById("title").value
    const description = document.getElementById("description").value
    const interest = document.getElementById("interest").value

    const table = document.getElementById("game-suggestions-list")

    let row = document.createElement("tr")
    let cols = [document.createElement("td"),
        document.createElement("td"),
        document.createElement("td"),
        document.createElement("td")]

    cols[0].textContent = title
    cols[1].textContent = description
    cols[2].textContent = interest
    cols[3].textContent = "Not Done"

    let impossible = 0

    for (let i = 0; i < 4; ++i) {
        if (cols[i].textContent === "") {
            impossible = 1
        }
    }

    if (!impossible) {
        for (let i = 0; i < 4; ++i) {
            row.appendChild(cols[i])
        }
        table.appendChild(row)
    }
}


add.onclick = addGameSuggestion
