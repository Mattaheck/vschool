    const readline = require("readline-sync");
    const name = readline.question("What is your name? ");

    var rs = require("readline-sync");

    var keyFound = false;
    var winGame = false;
    var endGame = false;


    var options = ["put hand in the hole", "use the key", "open door"];
    var index = rs.keyInSelect(options, "What would you like to do?");


    switch(index) {
        case 0:
            endGame = true;
            break;
        case 1:
            if(!keyFound){
                keyFound = true;
                console.log("you found a key");
            } else {
                console.log("you need to find the key to get out");
            }
        case 2: 
            if(!keyFound){
                console.log("the door is locked");
            } else {
                console.log("you have unlocked the door");
                winGame = true;
                endGame = true;
            }
            break;

            default:
                console.log("you can't escape through the hole in the wall!");

    }

    winGame ? console.log("you win!") : console.log("you die");





    


     
    



