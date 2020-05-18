var ForagerBee = function() {
  Bee.call(this);
};

ForagerBee.prototype = Object.create(Bee.prototype);

ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.age = 10;

ForagerBee.prototype.job = 'find pollen';

ForagerBee.prototype.canFly = true;

ForagerBee.prototype.treasureChest = [];

ForagerBee.prototype.forage = function() {
  this.treasureChest.push('treasure');
}