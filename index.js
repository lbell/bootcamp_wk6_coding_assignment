// Set up the scoreboard
let player1Score = 0;
let player2Score = 0;

// Gather the cards
let deck = buildDeck();

// Shuffle the cards
deck = shuffle(deck);

// Split deck in half between players (26 cards to each). Since the deck is
// randomly shuffled, no need to deal 1x1
let player1Stack = deck.slice(0, 26);
let player2Stack = deck.slice(26);

// Play the game
playGame(player1Stack, player2Stack);

/**
 * Builds a deck of 52 cards - no suites needed, so keeping things simple.
 * Of course simpler would be to just hard-code the array of values, but what's
 * the fun in that?
 *
 * @returns deck of 52 cards
 */
function buildDeck() {
  let output = [];

  // Need 4 suites of cards, so loop through 4 times
  for (i = 0; i < 4; i++) {
    // build an array 1-13 (well, 0-14, then hack off the 0). .keys() gets the
    // keys (indexes) and ditches the values (undefined).
    let suite = [...Array(14).keys()].slice(1);

    // tack on the new suite with the old one
    output = [...output, ...suite];
  }
  return output;
}

/**
 * Elegant fisher-Yates shuffling algorithm found here: https://stackoverflow.com/a/2450976/1061836
 * With an excellent explainer: https://bost.ocks.org/mike/shuffle/
 *
 * Walks through the array and pulls a random index number and swaps it with the
 * current index number.
 *
 * @param {arr} array Array to shuffle
 * @returns shuffled array
 */

function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

/**
 * Function to compare cards and set score
 *
 * @param {int} player1Card Player 1 card value
 * @param {int} player2Card Player 2 card value
 *
 * @returns null
 */
function calculateScore(player1Card, player2Card) {
  if (player1Card > player2Card) {
    console.log("Player 1 wins!");
    player1Score += 1;
  } else if (player1Card < player2Card) {
    console.log("Player 2 wins!");
    player2Score += 1;
  } else {
    console.log("Tie! No points awarded.");
  }

  return;
}

/**
 * Loops through each player's hand 26 times, calculates the score, and outputs
 * the running totals.
 *
 * @param {arr} player1Stack All of player 1's cards
 * @param {arr} player2Stack All of player 2's cards
 */
function playGame(player1Stack, player2Stack) {
  let turns = 0;
  let winner = "";

  while (turns < 26) {
    console.log("\n");

    console.log(`--- Round ${turns + 1}! ---`);

    console.log(`Player 1 card: ${player1Stack[turns]} | Player 2 card: ${player2Stack[turns]}`);
    calculateScore(player1Stack[turns], player2Stack[turns]);
    console.log(`Current Score: ${player1Score} to ${player2Score}`);

    turns++;
  }
  declareWinner();
}

/**
 * Declares the winner based on player scores.
 */
function declareWinner() {
  console.log("--------------------------------");
  console.log(`FINAL SCORE: ${player1Score} to ${player2Score}`);
  if (player1Score > player2Score) {
    winner = "Player 1";
  } else if (player1Score < player2Score) {
    winner = "Player 2";
  } else {
    winner = "Tie! Everybody";
  }
  console.log(`${winner} is the winner!!!`);
}
