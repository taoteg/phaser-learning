function Game() {
    console.log('>>> Game() start');
    //
    console.log('<<< Game() end');
}

Game.prototype.create = function () {
    console.log('>>> Game.create() start');
    this.input.onDown.add(this.onInputDown, this);
    console.log('<<< Game.create() end');
};

Game.prototype.update = function () {
    console.log('>>> Game.update() start');
    console.log('In the Game state...');
    console.log('<<< Game.update() end');
};

Game.prototype.onInputDown = function () {
    console.log('>>> Game.onInputDown() start');
    this.game.state.start('menu');
    console.log('<<< Game.onInputDown() end');
};

module.exports = Game;
