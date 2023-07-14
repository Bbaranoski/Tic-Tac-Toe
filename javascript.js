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

    const divs = document.querySelectorAll('div > div')

    divs.forEach((div) =>{
        
        div.addEventListener('click', () => {
    
            Gameboard.placeMarker(div.className, 'x')
    
       })
    })

})()

const Player = (marker) => {

    return{marker}

}
