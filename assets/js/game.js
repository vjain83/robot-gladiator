var playerName = window.prompt("What is your Robot Name");
console.log(playerName);
var playerHealth = 100;
var playerAttack = 10;

//giving the values to player

var enemyName = "Roborto";
var enemyHealth = 100;
var enemyAttack = 10;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
  
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    playerHealth = playerHealth - enemyAttack;

    console.log(enemyName + "attacked" + playerName +". " + playerName + "now has" + playerHealth + "health remaining.");

    if (playerHealth <= 0){

        window.alert( playerName + "has died!");
    }
    else{
window.alert(playerName + "has still" + playerHealth + "health left!");

    }
    fight();
    fight();



       // Log a resulting message to the console so we know that it worked.

// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console so we know that it worked.
console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

// to check enemy health

if (enemyHealth <=0){

    window.alert(enemyName +"has died!");
}
else{
    window.alert(enemyName + "has still"+ enemyHealth + "health left!" );
}

};
fight();
fight();
fight();

 


 