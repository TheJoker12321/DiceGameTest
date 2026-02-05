class Player {

    constructor(name) {

        this.name = name
        this.scoreTime = 0
        this.score = 0
    }

    addScore(){

        this.score += this.scoreTime
    }

    addScoreTime(cube1, cube2) {

        this.scoreTime += cube1
        this.scoreTime += cube2

        if (cube1 === cube2) {

            this.scoreTime = 0

        }
        
        

    }

}

const maxScore = document.getElementById('max-score')
console.log(maxScore);

const player1 = new Player('1')
const player2 = new Player('2')
let turn = 0
let rollButton = document.getElementById('roll')
let scorePlyer1 = document.getElementById('number-current1')
let generalscore1 = document.getElementById('number-score1')
let numberTimeClick = 0
let scorePlayer2 = document.getElementById('number-current2')
let generalscore2 = document.getElementById('number-score2')
rollButton.addEventListener('click', function() {
    console.log(turn);
    

        let rollCube = Math.floor(Math.random() * 6) + 1
        let rollCube2 = Math.floor(Math.random() * 6) + 1
        
        

        if (turn % 2 === 0) {
            player1.addScoreTime(rollCube, rollCube2)
            numberTimeClick += 1
            scorePlyer1.innerText = player1.scoreTime

            if (numberTimeClick === 5) {

            player1.addScore()
            player1.scoreTime = 0
            scorePlyer1.innerText = player1.scoreTime
            generalscore1.innerText = player1.score
            numberTimeClick = 0
            rollButton.disabled = true

            if (player1.score >= 100) {
        
                window.alert('player1 won')
                location.reload()
            }


}}else if (turn % 2 === 1) {

    player2.addScoreTime(rollCube, rollCube2)
        numberTimeClick += 1
        scorePlayer2.innerText = player2.scoreTime

    if (numberTimeClick === 5) {

        player2.addScore()
        player2.scoreTime = 0
        scorePlayer2.innerText = player2.scoreTime
        generalscore2.innerText = player2.score
        numberTimeClick = 0
        rollButton.disabled = true

        if (player2.score >= 100) {
        
            alert('player2 won')
            window.location.reload()
        }

}
}

})
clickHold(rollButton, turn)










function clickHold(button, turnPlayer) {

    const holdButton = document.getElementById('hold')
    holdButton.addEventListener('click', function() {
        button.disabled = false
        numberTimeClick = 0
        if (turnPlayer === 0) {
            
            turn += 1
        } else if (turnPlayer === 1) {
            turn -= 1
        }
    })
}

let newGame = document.getElementById('new-game')
newGame.addEventListener('click', function() {

    location.reload()

})
