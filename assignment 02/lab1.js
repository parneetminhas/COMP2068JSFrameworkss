// Importing the prompt npm package
const prompt = require('prompt');

// Function to get user input for Rock, Paper, or Scissors
function getUserSelection() {
    return new Promise((resolve, reject) => {
        prompt.start();
        prompt.get(['userSelection'], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.userSelection.toUpperCase());
            }
        });
    });
}

// Function to generate computer's selection randomly
function getComputerSelection() {
    const randomNumber = Math.random();
    if (randomNumber <= 0.34) {
        return 'PAPER';
    } else if (randomNumber <= 0.67) {
        return 'SCISSORS';
    } else {
        return 'ROCK';
    }
}

// Main function to play the game
async function playGame() {
    try {
        // Get user's selection
        const userSelection = await getUserSelection();
        console.log('User Selection:', userSelection);

        // Get computer's selection
        const computerSelection = getComputerSelection();
        console.log('Computer Selection:', computerSelection);

        // Determine the winner
        let result;
        if (userSelection === computerSelection) {
            result = "It's a tie";
        } else if (
            (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
            (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
            (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
        ) {
            result = 'User Wins';
        } else {
            result = 'Computer Wins';
        }

        // Display the outcome of the game
        console.log('Outcome:', result);

    } catch (error) {
        console.error('Error:', error);
    }
}

// Calling the main function to start the game
playGame();
