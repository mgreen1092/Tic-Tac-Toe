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


const box1 = document.querySelector('#box1')
const box2 = document.querySelector('#box2')
const box3 = document.querySelector('#box3')
const box4 = document.querySelector('#box4')
const box5 = document.querySelector('#box5')
const box6 = document.querySelector('#box6')
const box7 = document.querySelector('#box7')
const box8 = document.querySelector('#box8')
const box9 = document.querySelector('#box9')

let message = document.querySelector('#message')

let playerTurn = 'x'
let clickedBoxes = []
let player1Wins = 0;
let player2Wins = 0;

function handleClick (event) {
    event.preventDefault()
    if (clickedBoxes.includes(event.target.id[3])) {
        return;
    }
    // console.log(event.target.id[3])
    clickedBoxes.push(event.target.id[3])
    console.log(clickedBoxes)
    if (playerTurn === 'x') {
        event.target.style.backgroundColor = "blue"
        message.innerText = "Player Two's Turn!"

     } 
    if (playerTurn === 'o') {
        event.target.style.backgroundColor = "green"
        message.innerText = "Player One's Turn!"
    }
    //check to see what turn it is
   
    //check to see what turn it is
    console.log(playerTurn)
    playerTurn = (playerTurn === 'x' ? "o" : 'x')
    //if player turn is eqaul to x, then change it to o, else change playerTurn to x
    if ((box1.style.backgroundColor === 'blue' && box2.style.backgroundColor === 'blue' && box3.style.backgroundColor === 'blue') || 
    (box4.style.backgroundColor === 'blue' && box5.style.backgroundColor === 'blue' && box6.style.backgroundColor === 'blue') || 
    (box7.style.backgroundColor === 'blue' && box8.style.backgroundColor === 'blue' && box9.style.backgroundColor === 'blue')|| 
    (box1.style.backgroundColor === 'blue' && box4.style.backgroundColor === 'blue' && box7.style.backgroundColor === 'blue') || 
    (box2.style.backgroundColor === 'blue' && box5.style.backgroundColor === 'blue' && box8.style.backgroundColor === 'blue') || 
    (box3.style.backgroundColor === 'blue' && box6.style.backgroundColor === 'blue' && box9.style.backgroundColor === 'blue') || 
    (box1.style.backgroundColor === 'blue' && box5.style.backgroundColor === 'blue' && box9.style.backgroundColor === 'blue') || 
    (box3.style.backgroundColor === 'blue' && box5.style.backgroundColor === 'blue' && box7.style.backgroundColor === 'blue')) {
        setTimeout(function(){ 
            alert("Player one wins!") 
        }, 100);
        player1Wins += 1;
        let playerOneScore = document.querySelector('#player-one')
        playerOneScore.innerText = player1Wins;
        return;
    } else if ((box1.style.backgroundColor === 'green' && box2.style.backgroundColor === 'green' && box3.style.backgroundColor === 'green') || 
    (box4.style.backgroundColor === 'green' && box5.style.backgroundColor === 'green' && box6.style.backgroundColor === 'green') || 
    (box7.style.backgroundColor === 'green' && box8.style.backgroundColor === 'green' && box9.style.backgroundColor === 'green')|| 
    (box1.style.backgroundColor === 'green' && box4.style.backgroundColor === 'green' && box7.style.backgroundColor === 'green') || 
    (box2.style.backgroundColor === 'green' && box5.style.backgroundColor === 'green' && box8.style.backgroundColor === 'green') || 
    (box3.style.backgroundColor === 'green' && box6.style.backgroundColor === 'green' && box9.style.backgroundColor === 'green') || 
    (box1.style.backgroundColor === 'green' && box5.style.backgroundColor === 'green' && box9.style.backgroundColor === 'green') || 
    (box3.style.backgroundColor === 'green' && box5.style.backgroundColor === 'green' && box7.style.backgroundColor === 'green')) {
        setTimeout(function(){ 
            alert("Player two wins!") 
        }, 100);
        player2Wins += 1;
        let playerTwoScore = document.querySelector('#player-two')
        playerTwoScore.innerText = player2Wins
        return;
    }
} 

const divContainer = document.querySelector('.grid-container')
divContainer.addEventListener("click", handleClick)


//3: When the square is marked, user can't click on
//it again

//completed with the includes method


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
    let gridItems = document.querySelectorAll(".grid-item")
    gridItems.forEach(gridItem => {
        gridItem.style.backgroundColor = "white"
    })
    clickedBoxes = []
    playerTurn = (playerTurn === 'x' ? "o" : 'x')
    message.innerText = "Player One's Turn!"
    } 
    // window.location.reload(true)
    //https://stackoverflow.com/questions/42457544/trying-to-get-tic-tac-toe-board-to-reset
resetButton.addEventListener("click", reset);

//===================================================

//PHASE 2
//GOAL: players dont have to manually score the game
// - check the board with every turn 

//Winning conditions: 
//1, 2, 3
//4, 5, 6
//7, 8, 9
//1, 4, 7
//2, 5, 8
//3, 6, 9
//1, 5, 9
//3, 5, 7
//if background color is blue (player 1), player 1 wins else player 2 wins or tie


//STEPS:
//1: If a winning conidtion is met, display a message 
//of the player that won 

//If all the squares are filled in and no one won, 
//display a message saying its a tie

//User should be able to reset the game

