
const dice = document.querySelector('.dice')
const roll = document.querySelector('.roll')
const currentscore1 = document.querySelector('#current-score1')
const currentscore2 = document.querySelector('#current-score2')
const score1 = document.querySelector('#score1')
const score2 = document.querySelector('#score2')
const hold = document.querySelector('.hold')
const player1 = document.querySelector('.player1')
const player2 = document.querySelector('.player2')
const newgame = document.querySelector('.new-game')
let scorep1 = 0
let totalscore = [0, 0, 0]

let active = 1
let playing = true


roll.addEventListener("click", function () {
    if (playing) {
        const dicenum = Math.trunc(Math.random() * 6) + 1
        dice.classList.remove('hidden')
        dice.textContent = dicenum
        if (dicenum !== 1) {



            scorep1 += dicenum
            document.getElementById(`current-score${active}`).textContent = scorep1




        } else {
            document.getElementById(`current-score${active}`).textContent = '0'
            active = active === 1 ? 2 : 1
            scorep1 = 0
            player1.classList.toggle('player-active')
            player2.classList.toggle('player-active')

        }






    }
})


hold.addEventListener('click', function () {

    if (playing) {
        totalscore[active] += scorep1
        document.getElementById(`score${active}`).textContent = totalscore[active]
        if (totalscore[active] >= 100) {
            playing = false

            document.querySelector(`.player${active}`).classList.add('player0')
            document.querySelector(`.player${active}`).classList.remove('.player-active')
            document.querySelector(`.p${active}`).style.color = 'red'

            dice.classList.add('hidden')



        } else {
            document.getElementById(`current-score${active}`).textContent = 0
            scorep1 = 0
            active = active === 1 ? 2 : 1
            player1.classList.toggle('player-active')
            player2.classList.toggle('player-active')
        }
    }
}
)
newgame.addEventListener('click', function () {
    active = 1
    scorep1 = 0
    totalscore = [0, 0, 0]
    score1.textContent = 0
    score2.textContent = 0
    dice.classList.add('hidden')
    currentscore1.textContent = 0
    currentscore2.textContent = 0
    playing = true
    player1.classList.remove('player0')
    player2.classList.remove('player0')
    player1.classList.add('player-active')
    player2.classList.remove('player-active')
    document.querySelector('.p1').style.color = 'black'
    document.querySelector('.p2').style.color = 'black'




})

