/* ES6 implementation will occur at a later date
import {loadEnemy} from 'enemies';
let enemy = loadEnemy();
*/


var enemies = []
var boss = []

var weapons = []
var armor = []

var player = {}
var equipment = []
var equipFlag = ""
var enemyDamage = 0
var playerDamage = 0
var critChance = 0

/* Characters will be defined by the follow criteria
   1. Name
   2. Hit points
   3. Attack damage
   4. Defense
   5. Agility
   6. Critical chance
   7. Magic attack
   8. Image location
 */

let playerClass = [
{name: 'Fighter',
 hp: 100,
 atk: 6,
 def: 5,
 agi: 3,
 crit: 0,
 matk: 0,
 img: 'swordman.svg'},
{name: 'Squire',
 hp: 80,
 atk: 5,
 def: 3,
 agi: 5,
 crit: 1,
 matk: 0,
 img: 'swordman.svg'}
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
   crit: 1
 },
 {name: 'Gladius',
  rarity: 'common',
  atk: 8,
  agi: 7,
  crit: 1
}]

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
      crit: 3
  }]

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
   mres: 1
 }]

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
    hp: 55,
    atk: 3,
    def: 2,
    agi: 2,
    matk: 0,
    img: 'rat.svg'},
   {name: 'Wild Wolf',
    hp: 75,
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
   {name: 'Goblin',
    hp: 16,
    atk: 8,
    def: 6,
    agi: 10,
    matk: 0}
 ]
enemy = {monster: tutorialEnemies[0]}

function main(){
  var playerSelected = "N";
  loadGame();
  $("#select1").click(function() {
    selectCharacter($("#select1 span").html());
  });
  $("#select2").click(function() {
    selectCharacter($("#select2 span").html());
  });

  loadEnemyStats(enemy);
  $("#equip").click(function() {
    equipCharacter();
    calcPlayerDamage();
  });
  $("#unequip").click(function() {
    unequipCharacter();
    calcPlayerDamage();
  });
  $("#fightButton").click(function() {
    beginFight();
  });
}

function loadGame(){
  setTimeout(function(){
      $('body').addClass('loaded');
      $('h1').css('color','#222222');
  }, 3000);
  $('.battle').hide();
  $('#select1 span').html(playerClass[0].name);
  $('#select2 span').html(playerClass[1].name);

}

function selectCharacter(selection){
  this.select = selection;
  var pClass = [];
  switch (this.select) {
    case 'Fighter':
      this.weapon = commonWeapons[0];
      pClass = playerClass[0];
      break;
    case 'Squire':
      this.weapon = commonWeapons[1];
      pClass = playerClass[1];
      break;
    default:
      this.weapon = commonWeapons[0];
      break;
    }
   player = {class: pClass, weapon: this.weapon};
   equipFlag = "N";
    $("#characterSelect").hide();
    $(".battle").show();
    loadPlayerStats(player);
}

function loadPlayerStats(player){
    $("#player h2").html(player.class.name);
    $("#pHp span").html(player.class.hp);
    $("#pAtk span").html(player.class.atk);
    $("#pDef span").html(player.class.def);
    $("#pAgi span").html(player.class.agi);
    $("#player-img").attr("src", "assets/images/" + player.class.img);
}

function loadEnemyStats(enemy){
  $("#enemy h2").html(enemy.monster.name);
  $("#eHp span").html(enemy.monster.hp);
  $("#enemy-img").attr("src", "assets/images/" + enemy.monster.img);
}

function equipCharacter(){
  if (equipFlag === "N") {
    player.class.atk += player.weapon.atk;
    player.class.agi += player.weapon.agi;
    player.class.crit += player.weapon.crit;
    equipFlag = "Y"
    loadPlayerStats(player);
  }
}

function unequipCharacter(){
  if (equipFlag === "Y") {
    player.class.atk -= player.weapon.atk;
    player.class.agi -= player.weapon.agi;
    player.class.crit -= player.weapon.crit;
    equipFlag = "N"
    loadPlayerStats(player);
  }
}

function calcEnemyDamage(){
  enemyDamage = Math.round((Math.random() * enemy.monster.atk) * 4) - player.class.def;
  if (enemyDamage < 0) {
    enemyDamage = 0;
  }
}

function calcPlayerDamage(){
  critChance = Math.floor(Math.random() * 100);
  if (critChance > (100 - player.class.crit)) {
      playerDamage = (Math.round((Math.random() * player.class.atk) + (player.class.atk * 1.1)) - enemy.monster.def);
  } else {
    playerDamage = (Math.round((Math.random() * player.class.atk) + ((player.class.atk / 2) * .3)) - enemy.monster.def);
  };
}

function enemyAttack(playerHp, maxPlayerHp, enemyAgi){
  this.player.hp = playerHp;
  this.player.maxHp = maxPlayerHp;
  this.enemy.agi = enemyAgi
    if (this.player.hp === 0){
      endGame('enemy');
    }
  if (this.player.hp > 0){
    calcEnemyDamage();
    this.player.hp -= enemyDamage;
    $("#playerHpBar").attr("style", "width:" + Math.floor(((this.player.hp / this.player.maxHp) * 100)) + "%");
    $("#battleText").prepend("<p style='color:red'>Enemy hits YOU for " + enemyDamage + " points of damage.</p>");
    return setTimeout(enemyAttack, this.enemy.agi, this.player.hp, this.player.maxHp, this.enemy.agi);
  }
}

function playerAttack(enemyHp, maxEnemyHp, playerAgi){
  this.enemy.hp = enemyHp;
  this.enemy.maxHp = maxEnemyHp;
  this.player.agi = playerAgi;
    if (this.enemy.hp === 0){
      endGame('player');
    }
  if (this.enemy.hp > 0){
    calcPlayerDamage();
    this.enemy.hp -= playerDamage;
    $("#enemyHpBar").attr("style", "width:" + Math.floor(((this.enemy.hp / this.enemy.maxHp) * 100)) + "%");
    $("#battleText").prepend("<p style='color:green'>YOU hit enemy for " + playerDamage + " points of damage.</p>");
    return setTimeout(playerAttack, this.player.agi, this.enemy.hp, this.enemy.maxHp, this.player.agi);
  }
}

function beginFight(){
  var maxPlayerHp = player.class.hp;
  var playerHp = maxPlayerHp;
  var playerAgi = Math.floor(5000 / player.class.agi);
  var enemyHp = enemy.monster.hp;
  var maxEnemyHp = enemyHp;
  var enemyAgi = Math.floor(2500 / enemy.monster.agi);

  //while (playerHp > 0 && enemyHp > 0){
    //playerHp = enemyAttack(playerHp);
    //enemyHp = playerAttack(enemyHp);
    setTimeout(enemyAttack, enemyAgi, playerHp, maxPlayerHp, enemyAgi);
    setTimeout(playerAttack, playerAgi, enemyHp, maxEnemyHp, playerAgi);
   //}
}

function endGame(winner){
  this.winner = winner;
  switch (this.winner) {
    case 'player':
      alert("You win!!");
      break;
    case 'enemy':
      alert("You lose..");
      break;
    default:
      break;
    }
}
$(document).ready(main);
