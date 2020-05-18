var Bee = function() {
  Grub.call(this);
  // this.food =
};

Bee.prototype = Object.create(Grub.prototype);

Bee.prototype.constructor = Bee;

Bee.prototype.age = 5;

Bee.prototype.color = 'yellow';

// Bee.prototype.food = this.food;

// Bee.prototype.eat = this.eat;

Bee.prototype.job = 'keep on growing';