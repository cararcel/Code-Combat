hero.moveDown();
// Mama always said to eat random mushrooms you find in dungeons.
hero.moveRight();
hero.moveDown();
hero.moveUp();
hero.moveLeft();
hero.moveDown(2);
hero.moveRight(4);
hero.moveUp();
hero.moveLeft();
hero.moveUp();
hero.moveRight();
hero.moveLeft();
hero.moveUp();
hero.moveRight();
// Find your way to the Dungeon Keeper.
while (true) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        hero.attack(enemy);
    }
}
