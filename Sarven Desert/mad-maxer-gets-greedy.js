// Collect more coins than your doppelganger.
// You only have a few seconds to collect coins. Choose your path wisely!
while(true) {
    var bestCoin = null;
    var maxRating = 0;
    var coinIndex = 0;
    var coins = hero.findItems();
    // Try calculating "value / distance" to decide which coins to get.
    while(coinIndex < coins.length) {
        var coin = coins[coinIndex]
        var distance = hero.distanceTo(coin);
        var value = coin.value;
        var rating = value / distance;
        if (maxRating < rating){
            maxRating = rating
            bestCoin = coin
        }
        coinIndex += 1;
    }
    if (bestCoin){
        hero.move(bestCoin.pos);    
    }
}