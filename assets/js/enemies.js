var enemies = []
var boss = []

/* Enemies will be defined by the follow criteria
   1. Name
   2. Hit points
   3. Attack damage
   4. Defense
   5. Agility
   6. Magic attack
 */

 let tutorialEnemies = [
   {name: 'Sewer Rat',
    hp: 10,
    atk: 3,
    def: 2,
    agi: 2,
    matk: 0},
   {name: 'Wild Badger',
    hp: 12,
    atk: 4,
    def: 1,
    agi: 3,
    matk: 0}
 ]

 let easyEnemies = [
   {name: 'Kobold',
    hp: 18,
    atk: 11,
    def: 8,
    agi: 6,
    matk: 0},
   {name: 'Golbin',
    hp: 16,
    atk: 8,
    def: 6,
    agi: 10,
    matk: 0}
 ]
export function loadEnemy() {
    enemies.push(tutorialEnemies);
    return enemies;
}
