const Gameboard = () => {
    const gameBoard = ['x', 'o']

    const board = document.querySelector('.board')

    const test = gameBoard.forEach((e) => {

        let marker = document.createElement('p')
        marker.textContent = e
        board.appendChild(marker)

    })

    return{test}
}

const DisplayControlle = () => {

}

const Playe = (() => {

})()