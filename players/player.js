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