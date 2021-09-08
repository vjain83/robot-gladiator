
//giving the values to player
//creatibg array for enemy name

var fight = function (enemy) {

    // repeat and execute as long as the enemy-robot is alive 
    while (playerInfo.health > 0 && enemy.health > 0) {

        // ask player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // if player picks "skip" confirm and then stop the loop

        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight

            if (confirmSkip) {
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
            // leave the while loop since the player has died
            break;
        }
        else {
            window.alert(enemy.name + " has still " + enemy.health + " health left!");
        }

        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);
        // Log a resulting message to the console so we know that it worked.

        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

        if (playerInfo.health <= 0) {

            window.alert(playerInfo.name + " has died!");

            break;
        }
        else {
            window.alert(playerInfo.name + " has still " + playerInfo.health + " health left!");
        }

    }

};


// function to start a new game
var startGame = function () {
    // reset player stats
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

    //playgame
    endGame();
};

var endGame = function () {
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
// function to set name
var getPlayerName = function () {
    var name = "";

    // ADD LOOP HERE WITH PROMPT AND CONDITION
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);
    return name;
};

var playerInfo = {
    name: getPlayerName(),
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

startGame();
