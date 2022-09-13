// You only have 20 seconds until the ogre horde arrives!
// Grab as much gold as you can, then retreat to your base and wall it off!
while (hero.time < 20) {
    // Collect coins
    //hero.say("I should pick up a coin");
    var bestCoin = null;
    var maxRating = 0;
    var coinIndex = 0;
    var coins = hero.findItems();
    while (coinIndex < coins.length) {
        var coin = coins[coinIndex];
        var distance = hero.distanceTo(coin);
        var value = coin.value;
        var rating = value / distance;
        if (maxRating < rating) {
            maxRating = rating;
            bestCoin = coin;
        }
        coinIndex += 1;
    }
    if (bestCoin) {
        hero.move(bestCoin.pos);
    }
}
while (hero.pos.x > 16) {
    // Retreat behind the fence
    hero.say("I should retreat");
    hero.moveXY(16, 37);
}
// Build a fence to keep the ogres out.
hero.buildXY("fence", 21, 38);
hero.buildXY("fence", 21, 36);
hero.buildXY("fence", 21, 34);
