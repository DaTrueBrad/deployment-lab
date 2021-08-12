const favBtn = document.getElementById('fav-button')
const bioBtn = document.getElementById('bio-button')

const container = document.getElementById('content-container')

function showFav(e) {
    container.innerHTML = ''
    container.innerHTML =
    '<div id="added-content"> <h2>Here is a list of my favorite things!</h2> <li>Rice</li> <li>Exercise</li> <li>Anime</li></div>'
}

function showBio(e) {
    container.innerHTML = ''
    container.innerHTML =
    '<div id="added-content"> <h2>Here is my bio!</h2> <p>I have been arodund the block a few times, even stirring up trouble where I can. I have been a personal trainer, a financial consultant, and now web developer!</p></div>'
}

favBtn.addEventListener('click', showFav)
bioBtn.addEventListener('click', showBio)