const Gameboard = () => {
    const gameBoard = ['X', 'O', '', '', '', '', '', '', '']

    const render = gameBoard.forEach((e, i) => {
        const test = select(i)
        const marker = create(e)
        test.appendChild(marker)
    })

    function select(index) {
        return document.getElementById(`${index}`)
    }

    function create(element){
        return document.createElement('p')
    }

    return{render}
}

const DisplayControlle = () => {

}

const Player = (() => {

})()