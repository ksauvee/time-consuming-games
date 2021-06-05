const chosen_text = document.getElementById('chosen-text')
const text_zone = document.getElementById('word')
const tries_zone = document.getElementById('tries')
const results = document.getElementById('results')
const start = Date.now()
let tries = 0
let rightword = ''
getChosenText()


//https://raw.githubusercontent.com/nmondon/mots-frequents/master/data/frequence.json
function getChosenText() {
    fetch('https://raw.githubusercontent.com/nmondon/mots-frequents/master/data/frequence.json')
    .then(response => response.json())
    .then(function (data) {
        const random_int = Math.floor(Math.random() * data.length)
        rightword = data[random_int].label
        const shuffledWord = scrambleLetters(rightword)
        chosen_text.innerHTML = shuffledWord
    })
}

function scrambleLetters(word){
    let newWord = ''
    let random_int
    let letter
    while(word !== ''){
        random_int = Math.floor(Math.random() * word.length)
        newWord += word[random_int]
        word = word.replace(word.charAt(random_int), '');
    }
    return newWord
}

function isTypedTextCorrect() {
    let typed_text = text_zone.value
    const answer_time = Date.now() - start

    if (typed_text === rightword) {
        endingMessage(answer_time)
        return(Date.now())
    } else {
        tries += 1;
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        isTypedTextCorrect()
        tries_zone.innerHTML = "Tries : " + tries
    }
})

function stylizeEndingMessage(element) {
    element.style.backgroundColor = "#425664"
    element.style.color = "white"
    element.style.display = "block"

    return element
}

function endingMessage(answer_time) {
    // we decrease the background opacity in order to highlight the ending message
    document.getElementsByTagName("header")[0].style.opacity = "0.2"
    document.getElementById("submit").style.opacity = "0.2"
    tries_zone.style.opacity = "0.2"
    text_zone.style.opacity = "0.2"
    chosen_text.style.opacity = "0.2"


    results.innerHTML = "You type the text in " + Math.floor(answer_time / 1000) + " seconds ! And did " + (tries+1) + " tries ! "
    results = stylizeEndingMessage(results)

}