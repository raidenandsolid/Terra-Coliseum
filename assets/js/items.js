var weapons = []
var armor = []

/* Weapons will be defined by the following criteria:
  1. Weapon name
  2. Rarity
  3. Attack damage
  4. Agility
  5. Critical chance
*/

let commonWeapons = [
  {name: 'Longsword',
   rarity: 'common',
   atk: 10,
   agi: 3,
   crit: 1},
  {name: 'Shortsword',
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
