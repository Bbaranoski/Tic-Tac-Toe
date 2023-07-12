const Gameboard = gai => {
    const gameBoard = ['X', 'O', '', '', '', '', '', '', '']

    const render = gameBoard.forEach((e, i) => {
        const test = select(i)
        test.textContent = e
        console.log(gameBoard)
    })

    function select(index) {
        return document.getElementById(`${index}`)
    }

    return{render, gameBoard}
}

const DisplayControlle = () => {

}

const Player = (() => {

})()