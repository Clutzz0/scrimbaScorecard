let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')
let homeNumber = 0
let guestNumber = 0



function add1Home() {
  homeNumber += 1
  homeScore.textContent = homeNumber
}
function add2Home() {
  homeNumber += 2
  homeScore.textContent = homeNumber
}
function add3Home() {
  homeNumber += 3
  homeScore.textContent = homeNumber
}
function add1Guest() {
  guestNumber += 1
  guestScore.textContent = guestNumber
}
function add2Guest() {
  guestNumber += 2
  guestScore.textContent = guestNumber
}
function add3Guest() {
  guestNumber += 3
  guestScore.textContent = guestNumber
}
function resetGame() {
  homeScore.textContent = 0
  homeNumber = 0
  guestScore.textContent = 0
  guestNumber = 0
}