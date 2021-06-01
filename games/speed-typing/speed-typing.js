function is_typed_text_correct(chosen_text, start, results) {
    let typed_text = document.getElementById('typed-text').value
    const answer_time = Date.now() - start
    if (typed_text === chosen_text.textContent) {
        ending_message(results, answer_time)
        return Date.now()
    }
}


function get_random_int(max) {
    return Math.floor(Math.random() * max)
}


function get_chosen_text(chosen_text) {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(function (data) {
        const random_int = get_random_int(data.length)
        chosen_text.textContent = data[random_int].title
    })
}


function ending_message(results, answer_time) {
    results.innerHTML = "You type the text in " + Math.floor(answer_time / 1000) + " seconds !"
    results.style.backgroundColor = "#425664"
    results.style.color = "white"
}


function main() {
    const chosen_text = document.getElementById('chosen-text')
    const submit_button = document.getElementById('submit-button')
    const results = document.getElementById('results')
    let start = Date.now()
    document.getElementById('typed-text').value = ''
    get_chosen_text(chosen_text)
    submit_button.onclick = function() {start = is_typed_text_correct(chosen_text, start, results)}
}


main()
