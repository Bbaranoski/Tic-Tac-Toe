const Gameboard = () => {
    const gameBoard = ['x', 'o', '', '', '', '', '', '', '']

    const test = gameBoard.forEach((e, test) => {

        const render = document.getElementById(`${test}`)
        let marker = document.createElement('p')
        marker.textContent = e
        render.appendChild(marker)

    })

    return{test}
}

const DisplayControlle = () => {

}

const Playe = (() => {

})()