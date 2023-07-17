const Gameboard = (() => {
    let gameBoard = []

    const placeMarker = (place, marker) =>{

        gameBoard[place] = marker
        render()
        //horizontal win
        winCondition(gameBoard[0], gameBoard[1], gameBoard[2])
        winCondition(gameBoard[3], gameBoard[4], gameBoard[5])
        winCondition(gameBoard[6], gameBoard[7], gameBoard[8])
        //vertical win
        winCondition(gameBoard[0], gameBoard[3], gameBoard[6])
        winCondition(gameBoard[1], gameBoard[4], gameBoard[7])
        winCondition(gameBoard[2], gameBoard[5], gameBoard[8])
        // diagonal win
        winCondition(gameBoard[0], gameBoard[4], gameBoard[8])
        winCondition(gameBoard[2], gameBoard[4], gameBoard[6])

    }

    const render = () => {
        gameBoard.forEach((e, i) => {
            const selectP = select(i)
            selectP.textContent = e
        })
    }

    const select = (index) => {
        return document.getElementById(`${index}`)
    }

    const winCondition = (one, two, three) =>{

        if(one == two && one == three && one == playerOne.marker){

            alert('The winner is ' + playerOne.marker)
            DisplayControlle.gameover()

        }else if(one == two && one == three && one == playerTwo.marker){

            alert('The winner is ' + playerTwo.marker)
            DisplayControlle.gameover()

        }

    }

    const restart = () => {

        gameBoard.forEach((e, i) => {
            const selectP = select(i)
            selectP.textContent = ""
        })
        gameBoard.splice(0, 8)

    }

    return{placeMarker, restart}

})()

const DisplayControlle = (() => {

    let turnOne = true
    const divs = document.querySelectorAll('div > div > div')
    const restart = document.querySelector("#restart")

    divs.forEach((div) =>{  
        div.addEventListener('click', () => {

            if(turnOne == true && div.id != 'marked'){

                div.id = 'marked'
                turnOne = false
                Gameboard.placeMarker(div.className, playerOne.marker)

            }else if(div.id != 'marked'){

                div.id = 'marked'
                turnOne = true
                Gameboard.placeMarker(div.className, playerTwo.marker)

            }   
       }) 
    })

    const restartDisplay = () => {
        divs.forEach((div) => {
            div.id = ""
        })
        turnOne = true
    }

    restart.addEventListener('click', () =>{
        restartDisplay()
        Gameboard.restart()    
    })

    const gameover = () =>{
        divs.forEach((div) => {
            div.id = 'marked'
        })
    }
    return{gameover}

})()

const Player = (marker) => {

    return{marker}

}

const playerOne = Player('X')
const playerTwo = Player('O')