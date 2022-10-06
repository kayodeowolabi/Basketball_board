let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")
let guestStoreEl = document.getElementById("guest-score")
let homeStoreEl = document.getElementById("home-score")
let homeScore = 0
let guestScore = 0

function homeplusone(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
function homeplustwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}
function homeplusthree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}


function guestplusone(){
    guestScore += 1
    guestStoreEl.textContent = guestScore
}
function guestplustwo(){
    guestScore += 2
    guestStoreEl.textContent = guestScore
}
function guestplusthree(){
    guestScore += 3
    guestStoreEl.textContent = guestScore
}
