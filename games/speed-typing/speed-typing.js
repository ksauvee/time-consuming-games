function is_typed_text_correct(chosen_text, start, results, retry, retry_same_text) {
    let typed_text = document.getElementById('typed-text').value
    const answer_time = Date.now() - start
    if (typed_text === chosen_text.textContent) {
        ending_message(results, answer_time, retry, retry_same_text, start)
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


function ending_message(results, answer_time, retry, retry_same_text, start) {
    document.getElementsByTagName("header")[0].style.opacity = "0.2"
    document.getElementsByTagName("form")[0].style.opacity = "0.2"
    document.getElementById("submit-description").style.opacity = "0.2"
    results.innerHTML = "You type the text in " + Math.floor(answer_time / 1000) + " seconds !"
    results.style.backgroundColor = "#425664"
    results.style.color = "white"
    results.style.display = "block"
    retry.innerHTML = "Retry"
    retry.style.backgroundColor = "#425664"
    retry.style.color = "white"
    retry.style.display = "block"
    retry.onclick = function() {window.location.reload()}
    retry_same_text.innerHTML = "Retry With Same Text"
    retry_same_text.style.backgroundColor =  "#425664"
    retry_same_text.style.color = "white"
    retry_same_text.style.display = "block"
    retry_same_text.onclick = function() {start = launch_retry(results, retry, retry_same_text)}
}


function launch_retry(results, retry, retry_same_text) {
    results.style.display = "none"
    retry.style.display = "none"
    retry_same_text.style.display = "none"
    document.getElementById('typed-text').value = null
    return Date.now()
}


function main() {
    const chosen_text = document.getElementById('chosen-text')
    const submit_button = document.getElementById('submit-button')
    const results = document.getElementById('results')
    const retry = document.getElementById('retry')
    const retry_same_text = document.getElementById('retry-same-text')
    let start = Date.now()
    document.getElementById('typed-text').value = ''
    get_chosen_text(chosen_text)
    submit_button.onclick = function() {start = is_typed_text_correct(chosen_text, start, results, retry, retry_same_text)}
}


main()
