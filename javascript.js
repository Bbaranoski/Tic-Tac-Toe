const Gameboard = (() => {
    const gameBoard = ['X', 'O', '', '', '', '', '', '', '']
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

})()

const Player = (marker) => {

    return{marker}

}

const divs = document.querySelectorAll('div > div')

divs.forEach((div) =>{
    
    div.addEventListener('click', () => {

        Gameboard.place = div.id

   })
})