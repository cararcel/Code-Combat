// You'll need good strategy to win this one!
// Your clone will have the same equipment you have!
// But, they're not very skilled at using special powers.

function attack(enemy) {
    if (pet.isReady("cold-blast")) {
        pet.moveXY(enemy.pos.x, enemy.pos.y);
        pet.coldBlast();
    } else if (pet.isReady("chase")) {
        pet.chase(enemy);
    }
}
while (true) {
    var closestArcher = 0;
    var distArcher = 9999;
    var closestSoldier = 0;
    var distSoldier = 9999;
    var closest = 0;
    var dist = 9999;
    var enemyIndex = 0;
    var enemies = hero.findEnemies();
    while (enemyIndex < enemies.length) {
        var enemy = enemies[enemyIndex];
        var distance = hero.distanceTo(enemy);
        if (enemy.health > 0 && enemy.type != "sand-yak") {
            if (enemy.type == "archer" && distance < distArcher) {
                distArcher = distance;
                closestArcher = enemy;
            }
            if (enemy.type == "soldier" && distSoldier > distance) {
                distSoldier = distance;
                closestSoldier = enemy;
            }
            if (enemy && dist > distance) {
                dist = distance;
                closest = enemy;
            }
        }
        enemyIndex++;
    }
    if (closestSoldier && distSoldier < 10) {
        enemy = closestSoldier;
    } else if (closestArcher && distArcher < 20) {
        enemy = closestArcher;
    } else {
        enemy = closest;
    }
    if (enemy && enemy.health > 0) {
        if (hero.health < hero.maxHealth / 2) {
            hero.consecrate();
        }
        if (hero.health < hero.maxHealth / 3) {
            hero.moveXY(40, 84);
        } else if (hero.isReady("bash")) {
            hero.bash(enemy);
        } else if (hero.isReady("cleave")) {
            hero.cleave(enemy);
        } else {
            hero.attack(enemy);
        }
        
        attack(enemy)
    }
}
