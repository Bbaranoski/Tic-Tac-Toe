const Gameboard = (() => {
    const gameBoard = ['', '', '', '', '', '', '', '', '']
    const place = ''

    const render = () => {
            gameBoard.forEach((e, i) => {
            const selectP = select(i)
            selectP.textContent = e
        })
    }

    const select = (index) => {
        return document.getElementById(`${index}`)
    }

    const placeMarker = (place, marker) =>{
        gameBoard[place] = marker
        render()
    }

    return{placeMarker, place}

})()

const DisplayControlle = (() => {

    let turnOne = true
    const divs = document.querySelectorAll('div > div')

    divs.forEach((div) =>{
        
        div.addEventListener('click', () => {

            if(turnOne == true){
    
                Gameboard.placeMarker(div.className, playerOne.marker)
                turnOne = false

            }else{
                
                Gameboard.placeMarker(div.className, playerTwo.marker)
                turnOne = true

            }   
    
       })
    })

})()

const Player = (marker) => {

    return{marker}

}

const playerOne = Player('X')
const playerTwo = Player('O')