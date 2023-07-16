const Gameboard = (() => {
    const gameBoard = ['', '', '', '', '', '', '', '', '']

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

    return{placeMarker}

})()

const DisplayControlle = (() => {

    let turnOne = true
    const divs = document.querySelectorAll('div > div')

    divs.forEach((div) =>{
        
        div.addEventListener('click', () => {

            if(turnOne == true && div.className != 'marked'){
    
                Gameboard.placeMarker(div.className, playerOne.marker)
                div.className = 'marked'
                turnOne = false

            }else if(div.className != 'marked'){
                
                Gameboard.placeMarker(div.className, playerTwo.marker)
                div.className = 'marked'
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