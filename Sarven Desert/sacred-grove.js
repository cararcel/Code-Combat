// Don’t let ogres step into the grove.

function onSpawn() {
    while (true) {
        var scout = pet.findNearestByType("scout");
        if (scout && pet.isReady("charm")) {
            pet.charm(scout);
        }
    }
}

// Assign the event handler to the pet's "spawn" event.
pet.on("spawn", onSpawn);   
// Fight!
while(true) {
    var enemy = hero.findNearestEnemy();
    
    if (enemy) {
        hero.attack(enemy);
    }
}
