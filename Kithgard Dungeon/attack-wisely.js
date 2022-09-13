// Don't step on fire traps!
hero.moveUp(2);
hero.attack("Door A");
hero.moveUp(2);
var enemy = hero.findNearestEnemy();
hero.attack(enemy);
hero.attack(enemy);
hero.moveDown(3);
hero.moveRight(2);
hero.moveUp();
hero.attack("Door B");
hero.moveUp(2);
var enemy = hero.findNearestEnemy();
hero.cleave(enemy);
hero.moveDown(2);
hero.moveRight(2);
hero.attack("Door C");
hero.moveUp(3);
var enemy = hero.findNearestEnemy();
hero.attack(enemy);
hero.attack(enemy);
hero.moveDown(2);
hero.moveRight(2)
hero.moveUp(2);
var enemy = hero.findNearestEnemy();
hero.cleave(enemy);
hero.moveUp();
hero.moveRight();
hero.moveDown(4);
hero.moveLeft(3);
hero.moveDown();
hero.moveLeft(2);




