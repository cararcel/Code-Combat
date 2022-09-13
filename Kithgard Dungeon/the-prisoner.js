// Free the prisoner, defeat the guard and grab the gem.

// Free Patrick from behind the "Weak Door".
hero.attack("Weak Door");
// Defeat the guard, named "Two".
hero.moveRight(2);
hero.moveDown();

hero.shield();
hero.attack("Two");
hero.attack("Two");
hero.attack("Two");
// Get the gem.
hero.moveDown(2);
hero.moveRight();


