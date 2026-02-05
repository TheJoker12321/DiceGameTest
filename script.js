class Player {

    constructor(name) {

        this.name = name
        this.scoreTime = 0
        this.score = 0
    }

    addScore() {

        this.score += this.scoreTime
        this.scoreTime = 0

    }

    addScoreTime(cube1, cube2) {

        if (cube1 === cube2) {

            this.scoreTime = 0
            return 'dobble'

        }

        this.scoreTime += cube1
        this.scoreTime += cube2

    }

}

class Cube {


    constructor() {

        this.result = 0
    }

    rollCube() {

        this.result = Math.floor(Math.random()* 5) + 1
        return this.result

    }

    resultCube() {


        return `./cubeImages/cube${this.result}.png`
    }
}

function logic(maxScore, player1, player2) {

        let result;
        let turn = 'player1'
        let scorePlyer1 = document.getElementById('number-current1')
        for (let i = 0; i < 5; i ++) {

            let rollButton = document.getElementById('roll')
            rollButton.addEventListener('click', function() {
                console.log(1);
                

                let rollCube = new Cube()
                result = rollCube.rollButton()
                scorePlyer1 += result
                rollButton.style.backgroundImage = rollCube.resultCube()
            })

            clickHold(turn)
            if (turn === 'player2') {

                break
            }
        }

        player1.score += scorePlyer1

        let scorePlyer2 = document.getElementById('number-current1')
        for (let i = 0; i < 5; i ++) {

            let rollButton = document.getElementById('roll')
            rollButton.addEventListener('click', function() {

                let rollCube = new Cube()
                result = rollCube.rollButton()
                scorePlyer2 += result
                rollButton.style.backgroundImage = rollCube.resultCube()
            })

            clickHold(turn)
            if (turn === 'player1') {

                break
            }

        }
        player2.score += scorePlyer2

    }




function clickHold(turn) {

    const holdButton = document.getElementById('hold')
    holdButton.addEventListener('click', function() {

        if (turn = 'player2') {

            turn = 'player1'
        } else {
            turn = 'player2'
        }
    })
}

function play() {

    const player1 = new Player('1')
    const player2 = new Player('2')

    logic(100, player1, player2)
    
}

play()