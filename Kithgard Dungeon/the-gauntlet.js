// Use what you've learned to defeat the ogres.
// Remember: it takes two attacks to defeat an ogre munchkin!
hero.moveRight();
while (true) {
    var enemy = hero.findNearestEnemy();
    hero.attack(enemy);
    hero.moveRight();
}
