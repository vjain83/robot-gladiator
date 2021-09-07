<<<<<<< HEAD
var playerName = window.prompt("What is your Robot Name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 20;
var enemyAttack = 12;
=======
>>>>>>> develop

//giving the values to player
//creatibg array for enemy name

<<<<<<< HEAD
var fight = function (enemyName) {
    // repeat and execute as long as the enemy-robot is alive 
    while (playerHealth > 0 && enemyHealth > 0) {
=======
var fight = function (enemy) {

    // repeat and execute as long as the enemy-robot is alive 
    while (playerInfo.health > 0 && enemy.health > 0) {
>>>>>>> develop

        // ask player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // if player picks "skip" confirm and then stop the loop

        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight

            if (confirmSkip) {
<<<<<<< HEAD
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;

                console.log("playerMoney", playerMoney)

                break; devicePixelRatio

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
=======
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                // subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);

                console.log("playerInfo.money", playerInfo.money)
                break;

            }


        }

        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );

        // to check enemy health
        if (enemy.health <= 0) {

            window.alert(enemy.name + " has died!");
            playerInfo.money = playerInfo.money + 20;
>>>>>>> develop
            // leave the while loop since the player has died
            break;
        }
        else {
<<<<<<< HEAD
            window.alert(enemyName + " has still " + enemyHealth + " health left!");
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked.

        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        if (playerHealth <= 0) {

            window.alert(playerName + " has died!");
=======
            window.alert(enemy.name + " has still " + enemy.health + " health left!");
        }

        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);
        // Log a resulting message to the console so we know that it worked.

        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

        if (playerInfo.health <= 0) {

            window.alert(playerInfo.name + " has died!");
>>>>>>> develop

            break;
        }
        else {
<<<<<<< HEAD
            window.alert(playerName + " has still " + playerHealth + " health left!");
=======
            window.alert(playerInfo.name + " has still " + playerInfo.health + " health left!");
>>>>>>> develop
        }

    }

};


// function to start a new game
var startGame = function () {
    // reset player stats
<<<<<<< HEAD
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyName = enemyNames[i];

            enemyHealth = 50;

            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");

            break;
        }
    }
=======
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyObj = enemyInfo[i];

            pickedEnemyObj.health = randomNumber(40, 60);

            fight(pickedEnemyObj);
            // if we're not at the last enemy in the array
            // ask if player wants to use the store before next round
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

            // if yes, take them to the store() function
            if (storeConfirm) {
                shop();
            }

            else {
                window.alert("You have lost your robot in battle! Game Over!");

                break;
            }

        }

    }

>>>>>>> develop
    //playgame
    endGame();
};

var endGame = function () {
    // if player is still alive, player wins!
<<<<<<< HEAD
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
=======
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
>>>>>>> develop
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }


}
<<<<<<< HEAD

// ask player if they'd like to play again

=======
var shop = function () {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."

    );

    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            playerInfo.refillHealth();

            break;
        case "upgrade":
        case "UPGRADE":
            playerInfor.upgradeAttack();

            break;
        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");

            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option
            shop();
            break;
    }



};

// function to generate a random numeric value
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var playerInfo = {
    name: window.prompt("What is your Player Name!"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function () {
        if (this.money >= 7) {
            window.alert("Refilling Player's Health by 20 for 7 dollers.");
            this.health += 20;
            this.money -= 7;

        }
        else {

            window.alert("You don't have enough Money!");
        }
    }, // comma!
    upgradeAttack: function () {
        if (this.attack >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars");
            this.attack += 6;
            this.money -= 7;

        }
        else {
            window.alert("You dont't have enough Money!");
        }
    }

};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];
>>>>>>> develop

startGame();
