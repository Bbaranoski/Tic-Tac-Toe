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
            console.log(playerOne.marker)
        }else if(one == two && one == three && one == playerTwo.marker){
            console.log(playerTwo.marker)
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

                Gameboard.placeMarker(div.className, playerOne.marker)
                div.id = 'marked'
                turnOne = false

            }else if(div.id != 'marked'){

                Gameboard.placeMarker(div.className, playerTwo.marker)
                div.id = 'marked'
                turnOne = true

            }   
       }) 
    })

    restart.addEventListener('click', () =>{
        divs.id = ""
        Gameboard.restart()
        turnOne = true
    })

})()

const Player = (marker) => {

    return{marker}

}

const playerOne = Player('X')
const playerTwo = Player('O')