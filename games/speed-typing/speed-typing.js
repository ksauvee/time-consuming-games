function isTypedTextCorrect(chosen_text, start, results, retry, retry_same_text) {
    let typed_text = document.getElementById('typed-text').value
    const answer_time = Date.now() - start

    if (typed_text === chosen_text.textContent) {
        endingMessage(results, answer_time, retry, retry_same_text, start)
        return Date.now()
    }
}


function getChosenText(chosenText) {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(function (data) {
        const random_int = Math.floor(Math.random() * data.length)
        chosenText.textContent = data[random_int].title
    })
}


function stylizeEndingMessage(element) {
    element.style.backgroundColor = "#425664"
    element.style.color = "white"
    element.style.display = "block"

    return element
}


function endingMessage(results, answer_time, retry, retry_same_text, start) {
    // we decrease the background opacity in order to highlight the ending message
    document.getElementsByTagName("header")[0].style.opacity = "0.2"
    document.getElementsByTagName("form")[0].style.opacity = "0.2"
    document.getElementById("submit-description").style.opacity = "0.2"

    results.innerHTML = "You type the text in " + Math.floor(answer_time / 1000) + " seconds !"
    results = stylizeEndingMessage(results)

    retry.innerHTML = "Retry"
    retry = stylizeEndingMessage(retry)
    retry.onclick = function() {window.location.reload()}

    retry_same_text.innerHTML = "Retry With Same Text"
    retry_same_text = stylizeEndingMessage(retry_same_text)
    retry_same_text.onclick = function() {start = launchRetry(results, retry, retry_same_text)}
}


function launchRetry(results, retry, retry_same_text) {
    results.style.display = "none"
    retry.style.display = "none"
    retry_same_text.style.display = "none"
    document.getElementById('typed-text').value = null
    return Date.now()
}


function main() {
    const chosen_text = document.getElementById('chosen-text')
    const results = document.getElementById('results')
    const retry = document.getElementById('retry')
    const retry_same_text = document.getElementById('retry-same-text')
    let start = Date.now()
    document.getElementById('typed-text').value = ''
    getChosenText(chosen_text)

    document.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
            start = isTypedTextCorrect(chosen_text, start, results, retry, retry_same_text)
        }
    })
}


main()
