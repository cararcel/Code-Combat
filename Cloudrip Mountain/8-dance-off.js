// Move in sync with your dance partner to impress Pender Spellbane.
var nearest = hero.findNearest(hero.findFriends());
var xdif = nearest.pos.x - hero.pos.x;
var ydif = nearest.pos.y - hero.pos.y;
while(true) {
    var target = {x: (nearest.pos.x - xdif) , y: (nearest.pos.y - ydif)}
   hero.move(target);
 }
 
