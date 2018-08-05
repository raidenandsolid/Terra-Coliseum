/* ES6 implementation will occur at a later date
import {loadEnemy} from 'enemies';
let enemy = loadEnemy();
*/


var enemies = []
var boss = []

var weapons = []
var armor = []

var player = []
var equipment = []

/* Characters will be defined by the follow criteria
   1. Name
   2. Hit points
   3. Attack damage
   4. Defense
   5. Agility
   6. Magic attack
 */

let playerClass = [
{name: 'Fighter',
 hp: 20,
 atk: 6,
 def: 5,
 agi: 3,
 matk: 0},
{name: 'Squire',
 hp: 18,
 atk: 5,
 def: 3,
 agi: 5,
 matk: 0}
]

/* Weapons will be defined by the following criteria:
  1. Weapon name
  2. Rarity
  3. Attack damage
  4. Agility
  5. Critical chance
*/

let commonWeapons = [
  {name: 'Battered Axe',
   rarity: 'common',
   atk: 10,
   agi: 3,
   crit: 1},
  {name: 'Gladius',
   rarity: 'common',
   atk: 8,
   agi: 7,
   crit: 1}]

let uncommonWeapons = [
     {name: 'Refined Longsword',
      rarity: 'uncommon',
      atk: 17,
      agi: 8,
      crit: 3},
     {name: 'Sharpened Shortsword',
      rarity: 'uncommon',
      atk: 14,
      agi: 11,
      crit: 3}]

/*Armor will be defined by the following criteria:
  1. Armor name
  2. Rarity
  3. Defense
  4. Magic Defense
  5. Magical resistance
*/

let commonArmor = [
  {name: 'Cotton Tunic',
   rarity: 'common',
   def: 5,
   mdef: 5,
   mres: 5},
  {name: 'Worn Vest',
   rarity: 'common',
   def: 3,
   mdef: 3,
   mres: 1}]

/* Enemies will be defined by the follow criteria
   1. Name
   2. Hit points
   3. Attack damage
   4. Defense
   5. Agility
   6. Magic attack
   7. Img location
 */

 let tutorialEnemies = [
   {name: 'Sewer Rat',
    hp: 10,
    atk: 3,
    def: 2,
    agi: 2,
    matk: 0,
    img: 'rat.svg'},
   {name: 'Wild Wolf',
    hp: 12,
    atk: 4,
    def: 1,
    agi: 3,
    matk: 0,
    img: 'wolf.svg'}
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

var player = {class: playerClass[0], weapon: commonWeapons[1]}
enemies = {monster: tutorialEnemies[0]}

function main(){
  
}
