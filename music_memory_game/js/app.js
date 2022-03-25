
alert(' Welcome to the Music Memory Game. In order to win you have to match all of the cards. The timer starts Now!')
// We start off with an alert box to let the user know the rules of the game

const cards = document.querySelectorAll('.memory-card'); 
// storing all of our memory cards in a variable.

let hasFlippedCard = false;
// variable will be used to determine if card has been flipped.

let lockBoard = false;
// variable will be used to stop more than two cards from being selected at once

let firstCard, secondCard;

let seconds = 0;
// variable will be used in our function to count time spent finding matches

let el = document.getElementById('seconds-counter');
// Storing div in a variable so we can update time in HTML

function flipCard () {
  //Makes it to were only two cards can be selected at a time
  if (lockBoard) return;


  //Stops card from being disabled by double click
  if (this === firstCard) return;
    this.classList.add('flip');

    if  (!hasFlippedCard) {
    //First time player has clicked card.
    hasFlippedCard = true;
    firstCard = this;

    return;

    }
    
    //second time player clicked card.

      hasFlippedCard = false;
      secondCard = this;

      checkForMatch();
}

function checkForMatch(){
    if (firstCard.dataset.framework ===
      secondCard.dataset.framework) {
      disableCards();

    if (document.querySelectorAll('.flip').length ===
        12) {

        setTimeout (function() { 
        alert('You are a musical JEEN-YUHS! It only took ' + el.innerText+ ' for you to find all of the matches.');
        location.reload();
      }, 700);
        
      }


    }
    // Our function to check for matches and to check and see if all the matches have been found.
    //  Which will trigger the alert message to end the game and refresh the page. 

    
    else{
  //What if it is not a match? 
unFlipCards();


  }
}

function disableCards() {
  // If the first card matches the second card we want remove the users ability to click the choosen cards again
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

function unFlipCards() {
  lockBoard = true;
 //What if it is not a match? 
setTimeout(() => {
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');
  
  lockBoard = false;
  }, 1500);
} 

(function shuffle () {
  cards.forEach(card =>{
    let randomPos = Math.floor (Math.random() * 12);
    card.style.order = randomPos;
  });
})()
// function to keep the cards random every time the page is refreshed.

function incrementSeconds() {
    seconds += 1;
    el.innerText = seconds + " seconds";
}

const cancel = setInterval(incrementSeconds, 1000);

//Count down logic. Updates the time in second info is used to tell user how long it took them 
// to find all the matches.


cards.forEach(card => card.addEventListener('click', flipCard));
// adds an event listner to every card when it is clicked and runs the flipCard function.
