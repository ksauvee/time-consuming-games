const chosen_text = document.getElementById('chosen-text')


function get_random_int(max) {
    return Math.floor(Math.random() * max)
}


function get_text() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(function (data) {
        random_int = get_random_int(data.length)
        chosen_text.textContent = data[random_int].title
    })
}


get_text()
