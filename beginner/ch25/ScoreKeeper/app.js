const p1 = {
	score: 0,
	games: 0,
	button: document.querySelector('#p1Button'),
	display: document.querySelector('#p1Display'),
	gamesDisplay: document.querySelector('#p1MatchesDisplay')
}
const p2 = {
	score: 0,
	games: 0,
	button: document.querySelector('#p2Button'),
	display: document.querySelector('#p2Display'),
	gamesDisplay: document.querySelector('#p2MatchesDisplay')
}

const message = document.querySelector('#message')
const resetButton = document.querySelector('#reset')
const bestOfGamesSelect = document.querySelector('#bestOfGames')
const winningScore = 11
let maxMatches = 5

let isGameOver = (score1, score2) => {
	if (score1 < winningScore && score2 < winningScore)
		return false
	else return Math.abs(score1 - score2) >= 2;
}

function updateScores(player, opponent) {
	if (!isGameOver(player.score, opponent.score)) {
		player.score += 1
		if (isGameOver(player.score, opponent.score)) {
			player.display.classList.add('has-text-success')
			opponent.display.classList.add('has-text-danger')
			player.button.disabled = true
			opponent.button.disabled = true
		}
		player.display.textContent = player.score
		displayTowelBreak(p1.score, p2.score)
	}
}

function displayTowelBreak(score1, score2) {
	const isTowelBreak = (sum) => {
		return sum % 6 === 0;
	}

	if (isTowelBreak(score1 + score2))
		message.textContent = "Towel Break"
	else
		message.textContent = ""
}

p1.button.addEventListener('click', function() {
	updateScores(p1, p2)
})

p2.button.addEventListener('click', function() {
	updateScores(p2, p1)
})

bestOfGamesSelect.addEventListener("change", function () {
	maxMatches = parseInt(this.value)
	console.log(maxMatches)
})

resetButton.addEventListener("click", reset)

function reset() {
	for (let p of [p1, p2]) {
		p.score = 0
		p.display.textContent = p.score
		p.display.classList.remove('has-text-success', 'has-text-danger')
		p.button.disabled = false
	}
}