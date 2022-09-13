// Attack when your soldiers' total health is greater
// than the ogres' total health

// This function return the sum of all the units' health.
function sumHealth(units) {
    var totalHealth = 0;
    // Complete this function:
    var unitIndex = 0;
    // While enemyIndex is less than the length of enemies array
    while(unitIndex < units.length) {
       totalHealth += units[unitIndex].health;
         unitIndex += 1;
    }
    return totalHealth;
}

while (true) {
    var friends = hero.findFriends();
    var enemies = hero.findEnemies();
    // Get the total health of your soldiers and the ogres.
    if (sumHealth(friends) <= sumHealth(enemies)) {
        hero.say("Wait");
    }
    // Say "Attack" when your side has more total health.
    else {
        hero.say("ATTACK!!!");
    }
}
