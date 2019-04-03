/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(gameObj){
  this.createdAt = gameObj.createdAt;
  this.name = gameObj.name;
  this.dimensions = gameObj.dimensions;
}
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`
};
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(statsObj) {
  GameObject.call(this, statsObj);
  this.healthPoints = statsObj.healthPoints;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage.`
};
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(humanObj) {
  GameObject.call(this, humanObj);
  CharacterStats.call(this, humanObj);
  this.team = humanObj.team;
  this.weapons = humanObj.weapons;
  this.language = humanObj.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}.`
};
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// ========================================================================================================
  // Stretch task:
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
  function Villain(villObj) {
    Humanoid.call(this, villObj);
    GameObject.call(this, villObj);
    CharacterStats.call(this, villObj);
  }

  Villain.prototype.kryptoStrike = function () {
    this.healthPoints = this.healthPoints - 30;
    if(this.healthPoints > 0) {
      return `You will die Superman! ---- ${this.healthPoints} points are taken from ${this.name}'s health...`;
    } else if (this.healthPoints <= 0) {
        return `The world is mine now! MUHAHAHA  Goodbye Superman!`;
    }

  }

  function Hero(heroObj) {
    Humanoid.call(this, heroObj);
    GameObject.call(this, heroObj);
    CharacterStats.call(this, heroObj);
  }

  Hero.prototype.powerStrike = function () {
    this.healthPoints = this.healthPoints - 30;
    if(this.healthPoints > 0) {
      return `You will never rule this planet! ---- ${this.healthPoints} points are taken from ${this.name}'s health...`;
      } else if (this.healthPoints <= 0) {
        return `I never wanted to hurt you Lex, you made me do this....`;
      }
  }
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  const lex = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 4,
      height: 8,
    },
    healthPoints: 30,
    name: 'Lex Luthor',
    team: 'Legion of Doom',
    weapons: [
      'Brains',
      'Karate',
      'Kryptonite',
    ],
    language: 'English',
  });

  const clark = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 4,
      height: 8,
    },
    healthPoints: 50,
    name: 'Clark Kent',
    team: 'Justice League',
    weapons: [
      'Extreme Power'
    ],
    language: 'English',
  });

  console.log(lex.kryptoStrike.call(clark)); // Lex shot krytonite at Superman
  console.log(clark.powerStrike.call(lex)); // Superman retaliated back at Lex
