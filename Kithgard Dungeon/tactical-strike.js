// Defeat the ogres.
hero.moveDown();
hero.moveRight(2);
var enemy1 = hero.findNearestEnemy();
hero.attack(enemy1);
 var enemy2 = hero.findNearestEnemy();
hero.attack(enemy2);
hero.moveDown();


