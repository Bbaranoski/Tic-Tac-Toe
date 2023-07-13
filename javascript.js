const Gameboard = (() => {
    const gameBoard = ['X', 'O', '', '', '', '', '', '', '']

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

    const divs = document.querySelectorAll('div')

    divs.forEach((div) =>{
        
       div.addEventListener('click', () => {

        console.log(div.class)
        
       })
    })

})()

const Player = (marker) => {

    return{marker}

}