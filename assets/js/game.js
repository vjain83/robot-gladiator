var playerName = window.prompt("What is your Robot Name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 20;
var enemyAttack = 12;

//giving the values to player
//creatibg array for enemy name

var fight = function (enemyName) {
    // repeat and execute as long as the enemy-robot is alive 
    while (playerHealth > 0 && enemyHealth > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // if player picks "skip" confirm and then stop the loop

        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight

            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;

                console.log("playerMoney", playerMoney)

                break;

            }

        }


        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // to check enemy health
        if (enemyHealth <= 0) {

            window.alert(enemyName + " has died!");
            playerMoney = playerMoney + 20;
            // leave the while loop since the player has died
            break;
        }
        else {
            window.alert(enemyName + " has still " + enemyHealth + " health left!");
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked.

        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        if (playerHealth <= 0) {

            window.alert(playerName + " has died!");

            break;
        }
        else {
            window.alert(playerName + " has still " + playerHealth + " health left!");
        }

    }
};

function startGame() {
    debugger;

    for (var i = 0; i < enemyNames.length; i++) {
        enemyPickedName = enemyNames[i];
        enemyHealth = 50;
        // call fight function with enemy-robot
        fight(enemyPickedName);

    }
}
startGame();
