let firstCard= 0
let secondCard= 0 
let hitMe= 0
let cards= []
let sum= 0
let hasBlackJack = false
let isAlive = false
let message = ""

let player = {
    name: "N/A",
    chips: 145
}

function pname(){
    player.name = prompt("Enter your name.")
    playerEl.textContent =player.name + ": $" + player.chips
}


let cardsEl= document.getElementById('cards-el')
let messageEl= document.getElementById('message-el')
let sumEl= document.getElementById('sum-el')
let playerEl= document.getElementById('player-el')

//GarrettplayerEl.textContent = player.name + ": $" + player.chips


function Random() {
    let randomCard = Math.floor((Math.random() * 13) + 1);
    if (randomCard > 10){
        return 10
    }else if (randomCard === 1){
        return 11
    }else{
        return randomCard
    }
  }
function startGame(){
    firstCard= Random()
    secondCard= Random() 
    cards= [firstCard, secondCard]
    sum= firstCard+ secondCard
    isAlive = true
    hasBlackJack = false
    renderGame()

}
function renderGame(){
        cardsEl.textContent ="Cards: "+ cards[0]+" "+ cards[1]
        
        sumEl.textContent ="Sum: "+ sum
        if (sum < 21 ) {
            message ="Do you want to draw a new card?"
            isAlize = true
        }else if (sum == 21){
            message ="You Won!"
            hasBlackJack = true
            player.chips+= 5
            playerEl.textContent =player.name + ": $" + player.chips
        }else {
            message = 'You lose.'
            isAlive= false
            player.chips -= 5
            playerEl.textContent =player.name + ": $" + player.chips
        }
        messageEl.innerHTML = message
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
    let hitMe= Random()
    sum+= hitMe
    cards.push( hitMe)
    sumEl.innerHTML ="Sum: "+ sum
    renderGame()
    let text = "";
        for (let i = 0; i < cards.length; i++) {
        text += cards[i] + " " ;
}   
    cardsEl.textContent= "Cards:" + text
    
    }else{
        alert("You need to start a new game")
    }
}


function reset(){
    cardsEl.textContent = "Cards:"
    sumEl.textContent= "Sum:"
    messageEl.textContent= "Want to play a round?"
}

