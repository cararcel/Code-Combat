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