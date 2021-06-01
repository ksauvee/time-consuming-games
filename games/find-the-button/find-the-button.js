const minuteur = document.getElementById('minuteur')
const compteur = document.getElementById('compteur')
const button = document.getElementById('CLICK')
const resultats = document.getElementById('resultats')
const end = Date.now() + 15000
let points = 0
button.onclick = function(){ if(Date.now()<end){ addpoint() } }

const IntervalID = setInterval(timer, 20)

function get_random_int(max) {
    return Math.floor(Math.random() * max)
}

function timer(){
    let timeElapsed = (end - Date.now())
    if(timeElapsed > 0){
        minuteur.innerHTML = Math.floor(timeElapsed/1000) + ' seconds ' + (timeElapsed -  Math.floor(timeElapsed/1000)*1000)
    }else if(timeElapsed <= 0){
        minuteur.innerHTML = 'FIN !'
        button.style.opacity = 0;
        messageFin()
    }
}

function addpoint(){
    points += 1
    compteur.innerHTML = 'Points : ' + points 
    changePosition()
}

function changePosition(){
    button.style.top = get_random_int(90)+'%';
    button.style.left = get_random_int(95)+'%';
}

function messageFin(){
    resultats.innerHTML = "You got : " + points + " points"
    resultats.style.backgroundColor = "#425664"
    resultats.style.color = "white"
    document.getElementsByTagName("header")[0].style.opacity = "0.2"
}