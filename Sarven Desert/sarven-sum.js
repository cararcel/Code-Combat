// To disable the fire-traps add the lowest trap.value to the highest value.
// Move to the white X and say the answer to Kitty the cougar.
// Defeat all the ogres if you dare.
// Once all ogres are defeated move to the red X.
// Look out for potions to boost your health.

var whiteX = {x:27, y:42};
var redX = {x:151 , y: 118};
var highest = 0;
var lowest = 999;
var trapIndex = 0;
var traps = hero.findByType("fire-trap");
while(trapIndex < traps.length) {
    var trap = traps[trapIndex];
    if (trap.value > highest){
        highest = trap.value;
    }
    if (trap.value < lowest){
        lowest = trap.value;
    }
    trapIndex ++;
}
hero.moveXY(whiteX.x, whiteX.y);
hero.say(lowest+highest);

while (true) {
    var enemy = hero.findNearestEnemy();
    var item = hero.findItems();
    if (enemy && enemy.type == "thrower"){
        hero.attack(enemy);    
    }
    else if (enemy){
        hero.attack(enemy);    
    }
    
    if (item && item.type == "potion"){
        hero.moveXY(item.pos.x, item.pos.y);    
    }
    
    if (!enemy || !item) {
        hero.moveXY(redX.x, redX.y);
    }
}

