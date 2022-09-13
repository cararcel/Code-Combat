// That ogre was defeated instantly! Better just avoid that yeti.
// We've hacked your fire-traps to go off after 5 seconds.
// The clearing to the north would be a good place for an explosive distraction.
// The yeti won't stay distracted forever, so hurry and grab the coins!
// After that run to the camp!
hero.buildXY("fire-trap", 64, 44);
hero.moveXY(44, 8);
hero.moveXY(16, 34);
while (true) {
    var item = hero.findNearestItem();
    if (item) {
        hero.move(item.pos);
    } else {
        hero.moveXY(65, 15);
    }
}
