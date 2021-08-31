var playerName = window.prompt("What is your Robot Name");
console.log(playerName);
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//giving the values to player

var enemyName = "Roborto";
var enemyHealth = 100;
var enemyAttack = 10;

var fight = function() {
    // Alert players that they are starting the round

    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    console.log(promptFight);
//if palyer choose to fight ,then fight

if (promptFight === "fight" || promptFight === "FIGHT"){

//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console so we know that it worked.
console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

// to check enemy health
if (enemyHealth <=0){

    window.alert( enemyName + "has died!" );
}
else{
    window.alert( enemyName + "has still"+ enemyHealth + "health left!" );
}

// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
    playerHealth = playerHealth - enemyAttack;

 // Log a resulting message to the console so we know that it worked.

    console.log( enemyName + "attacked" +  playerName  +". " +  playerName  + "now has" + playerHealth + "health remaining.");

    if (playerHealth <= 0){

        window.alert( playerName + "has died!");
    }
    else {
window.alert(playerName + "has still" + playerHealth + "health left!");

    }
// if player choose to skip the fight

} else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
  }
}
