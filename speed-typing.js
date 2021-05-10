const chosen_text = document.getElementById('chosen-text')

function fill_chosen_text(text) {
    chosen_text.textContent = text
}


function get_random_int(max) {
    return Math.floor(Math.random() * max)
}


function get_text() {
    text = ""
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(function (data) {
        random_int = get_random_int(data.length)
        text = data[random_int].title
        fill_chosen_text(text)
    })
}

get_text()
