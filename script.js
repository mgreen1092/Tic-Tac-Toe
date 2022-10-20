//PHASE 1

//1: Build 3 by 3 grid
//set up 9 divs in HTML
//use grid
//in HTML and CSS

//2: When user clicks on the square(event listener!!)
//mark the square the user clicked on
//use colors to start
//added IDs to all the boxes

//two options for player one and player two

let turns = 0

function changeBackgroundColorP1 () {
    turns = turns+1;
    let message = document.querySelector('#message')
    if (turns %2 === 0) {
        this.style.backgroundColor = "blue";
        message.innerText = "Player One's Turn!"
        if (this.style.backgroundColor = "blue") {
            alert('That space has already been selected! You miss your turn.')
            this.disabled = "disabled";
        }
        // this.disabled = "disabled";
    } else if (turns%2 != 0) {
        this.style.backgroundColor = "green"
        message.innerText = "Player Two's Turn!"
        // this.disabled = "disabled";
        if (this.style.backgroundColor = "green") {
            alert('That space has already been selected! You miss your turn.')
            this.disabled = "disabled";
        }
    }
}


//select player options
let p1 = document.querySelector('#button1')
let p2 = document.querySelector('#button2')
//register player 1 click
p1.addEventListener("click", function () {
    p1.style.backgroundColor = "green"})
//register player 2 click
p2.addEventListener("click", function () {
    p2.style.backgroundColor = "blue"
})
// function changeBackgroundColorP1 (event) {
//     let boxSelection = []
//     event.preventDefault()
//     if (p1.style.backgroundColor === "blue") {
//         this.style.backgroundColor = "blue";
//         p1.style.backgroundColor = 'white'
//         boxSelection.
//     } else if (p2.style.backgroundColor === "green") {
//         this.style.backgroundColor = "green"
//         p2.style.backgroundColor = 'white'
//     }
// }


const box1 = document.querySelector('#box1')
box1.value = '0'
const box2 = document.querySelector('#box2')
box2.value = '1'
const box3 = document.querySelector('#box3')
const box4 = document.querySelector('#box4')
const box5 = document.querySelector('#box5')
const box6 = document.querySelector('#box6')
const box7 = document.querySelector('#box7')
const box8 = document.querySelector('#box8')
const box9 = document.querySelector('#box9')

let boxArray = []
boxArray.push(parseInt(box1.value))
boxArray.push(parseInt(box2.value))
console.log(boxArray)
console.log(box1)



box1.addEventListener("click", changeBackgroundColorP1)
box2.addEventListener("click", changeBackgroundColorP1)
box3.addEventListener("click", changeBackgroundColorP1)
box4.addEventListener("click", changeBackgroundColorP1)
box5.addEventListener("click", changeBackgroundColorP1)
box6.addEventListener("click", changeBackgroundColorP1)
box7.addEventListener("click", changeBackgroundColorP1)
box8.addEventListener("click", changeBackgroundColorP1)
box9.addEventListener("click", changeBackgroundColorP1)

//3: When the square is marked, user can't click on
//it again



//if box is not equal to an empty string??


//4: A message should appear to show the players turn
//displayed message in h2, replace text in the 
//equation - even number is player 1's turn, odd is 
//player two's turn


//5: Reset button below tic tac toe grid to reset 
//the game
//button in HTML

//select button
const resetButton = document.querySelector('#reset-button')
// console.log(resetButton)
function reset () {
    //reset
    window.location.reload(true)
    //https://stackoverflow.com/questions/42457544/trying-to-get-tic-tac-toe-board-to-reset
}
resetButton.addEventListener("click", reset);

//===================================================

//PHASE 2
//GOAL: players dont have to manually score the game
// - check the board with every turn 

//STEPS:
//1: If a winning conidtion is met, display a message 
//of the player that won 

//If all the squares are filled in and no one won, 
//display a message saying its a tie

//User should be able to reset the game 

