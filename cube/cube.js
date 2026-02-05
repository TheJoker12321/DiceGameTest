class Cube {



    static rollCube() {

        return Math.floor(Math.random()* 5) + 1

    }

    static resultCube() {

        const roll = Cube.rollCube()

        if (roll === 1) {

            return './cubeImages/cube1.png'

        } else if (roll === 2) {

            return './cubeImages/cube2.png'
            
        } else if (roll === 3) {

            return './cubeImages/cube3.png'
            
        } else if (roll === 4) {

            return './cubeImages/cube4.png'
            
        } else if (roll === 5) {

            return './cubeImages/cube5.png'
            
        } else if (roll === 6) {

            return './cubeImages/cube6.png'
            
        }
    }
}

console.log(Math.floor(Math.random()* 6) + 1);
