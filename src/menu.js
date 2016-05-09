function Menu() {
    console.log('>>> Menu() start');
    //
    console.log('<<< Menu() end');
}

Menu.prototype.create = function() {
    console.log('>>> Menu.create() start');
    var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'MENU', {
        font: '42px Arial',
        fill: '#ffffff',
        align: 'center'
    });
    text.anchor.set(0.5);

    this.input.onDown.add(this.onInputDown, this);
    console.log('<<< Menu.create() end');
};

Menu.prototype.update = function() {
    console.log('>>> Menu.update() start');
    console.log('In the Menu state...');
    console.log('<<< Menu.update() end');
};

Menu.prototype.onInputDown = function() {
    console.log('>>> Menu.onInputDown() start');
    this.game.state.start('game');
    console.log('<<< Menu.onInputDown() end');
};

module.exports = Menu;
