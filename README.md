# music-memory-game

## Intro:
For my first project at General Assembly. I decided to build a memory game based music's most memorable song lyrics. The chance to take a trip down memory lane while testing their memory.

## Getting Started:

* The users clicks a card revealing the bottom card and tries to find the match while being timed.
* Once the user has found all 6 matches. The game is restarted and the User has the opportunity to beat their previous time.

### Try it Here: https://daishamays.github.io/music-memory-game/

![Screen Shot 2022-03-25 at 11 36 24 AM](https://user-images.githubusercontent.com/89038713/160152786-1821af59-54f1-4728-a0b6-f1b99fe6503d.png)

![Screen Shot 2022-03-25 at 11 37 47 AM](https://user-images.githubusercontent.com/89038713/160152993-6777d07f-4597-4ac8-a19f-cb99566f1031.png)

## Wireframe: 

![Seir-3-7_Game@2x](https://user-images.githubusercontent.com/89038713/160151609-c2098dea-d17f-4ff5-8804-e7f33be3db02.png)

## Psuedo Code:

We need to make title and scored card.

restart/play again button.

div to hold the cards and each card has a 
div that holds the front card & the back card.

alert box to let the user know the rules of 
the game

function flipCard () to flip cards so we can see if they match.

function checkForMatch() if card is a match update
class to flip which also triggers  disableCards();
so they flip back around and when we have 12 classes
that say flip we end the game with an Alert box.
telling user how many seconds it took for them to find 
all the messages.

function unflip() flip cards cards back if they
are not a match.

function shuffle() shuffles cards everytime browser
is refreshed

function incrementSeconds() our timer

iterate through every card and wait for user to click


## Planned Future Enhancements:

* Add modals

* I plan to add sound effects that are triggered everytime the user plays a
  round based on whether or not they got a match. If they get a match it will play a sound that relates to the music artist on the card.

* I plan to add high score showing previous finish times so the user can compare.

* Make mobile friendly

* I plan to update the play again button.

* Put contact Info on webpage

* Improve CSS
  * Change Font
  * Add Background
  * Resize cards
  * Center Board

* Add function to count attempts
* Stop timer when all the matches are found.


## Technologies Used

* HTML
* CSS
* JAVASCRIPT

