// Survive the waves of ogres.
// If you win, the level gets harder, and gives more rewards.
// If you lose, you must wait a day to re-submit.
// Each time you submit gives a new random seed.
while (true) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        if (hero.isReady("cleave")) {
            hero.cleave(enemy);
        }
        if (hero.isReady("bash")) {
            hero.bash(enemy);
        } else {
            hero.attack(enemy);
        }
    }
    hero.shield();
    var item = hero.findNearestItem();
    if (item) {
        if (hero.distanceTo(item) < 10) {
            if (hero.health < 500){
                pet.fetch(item);
            }
        } else {
            if (hero.health < 1000){
                pet.fetch(item);
            }
        }
    }
}
