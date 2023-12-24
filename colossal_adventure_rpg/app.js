// Declare playerName in the global scope
let playerName;

// Player name and random message
function getPlayerName() {
    playerName = prompt("hi! Please provide your player name!");
    return playerName;
}

function randomGreeting() {
    const greetings = [
        `hey ${playerName}, ready to play Colossal RPG?`,
        `good day ${playerName}, ready for an adventure?`,
        `hello ${playerName}, your quest awaits!`,
        `Welcome to the Colossal Adventure RPG ${playerName}!`
    ];

    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
}

getPlayerName(); // Call the function to get the player's name
console.log(randomGreeting()); // Call the function without passing playerName as an argument

// Asking player to walk and random generator to determine if an enemy appears or not
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function shouldEnemyAppear() {
    // Randomly determine if a wild enemy has appeared (1/3 chance)
    return getRandomNumber(1, 3) === 1;
}


function getRandomEnemy() {
    const enemies = ["Craig", "Bill", "Chester"];
    const randomIndex = Math.floor(Math.random() * enemies.length);
    return enemies[randomIndex];
}

function playerAttack() {
    return getRandomNumber(50, 120);
}

function enemyAttack() {
    return getRandomNumber(50, 120);
}

let playerHP = 50;
let playerItems = [];

// Game loop using a while loop
while (true) {
    const userInput = prompt("Enter 'w' to walk or 'q' to quit:");

    if (userInput === 'q') {
        console.log("Thanks for playing! See you next time.");
        break; // Exit the game loop if the user enters 'q'
    }

    if (userInput === 'w') {
        const enemyName = shouldEnemyAppear() ? getRandomEnemy() : null;

        if (enemyName) {
            console.log(`A wild ${enemyName} appears! Get ready for battle!`);

            while (true) {
                const action = prompt("Press 'a' to attack or 'r' to run?");
                
                if (action === 'a') {
                    const playerDamage = playerAttack();
                    const enemyDamage = enemyAttack();
            
                    console.log(`You dealt ${playerDamage} damage to ${enemyName}`);
                    console.log(`The ${enemyName} dealt ${enemyDamage} damage`);
            
                    if (playerDamage >= 100) {
                        console.log("You have defeated the enemy!");
                        playerHP += 50;
                        console.log("You gained 50 HP!");
                        const specialItems = ["Sword", "Axe", "Bow"];
                        const randomItem = specialItems[Math.floor(Math.random() * specialItems.length)];
                        playerItems.push(randomItem);
                        console.log(`You are awarded a ${randomItem}`);
                        break;
                    } else if (enemyDamage >= 100) {
                        console.log("You have died");
                        break;
                    }
                } else if (action === 'r') {
                    const escapeChance = getRandomNumber(1, 2);
            
                    if (escapeChance === 1) {
                        console.log("You have escaped!");
                        break;
                    } else {
                        console.log("You couldn't escape, continue the fight!");
                        const enemyDamage = enemyAttack();
                        console.log(`The ${enemyName} attacked and dealt ${enemyDamage} damage`);
            
                        if (enemyDamage >= 100) {
                            console.log("You have been killed by the enemy");
                            break;
                        }
                    }
                } else {
                    console.log("Invalid action, select 'r' or 'a'!");
                }
            }
            
        } else {
            console.log("You continue walking. No enemies in sight.");
        } 
    
            } else if (userInput === 'p') {
            console.log(`Player Name: ${playerName}`);
            console.log(`Player HP: ${playerHP}`);
            console.log(`Player Items: ${playerItems.length > 0 ? playerItems.join(', ') : 'None'}`);
           
            
    } else {
        console.log("Invalid input. Please enter 'w' to walk or 'q' to quit.");
    }

   
}
