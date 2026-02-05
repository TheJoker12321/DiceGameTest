export class Cube {


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

