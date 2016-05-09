function Preloader() {
  console.log('>>> Preloader() start');
  this.asset = null;
  this.ready = false;
  console.log('<<< Preloader() end');
}

Preloader.prototype.preload = function () {
  console.log('>>> Preloader.preload() start');
  this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
  this.load.setPreloadSprite(this.asset);

  // this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
  // this.loadResources();
  this.ready = true;
  console.log('<<< Preloader.preload() end');
};

Preloader.prototype.loadResources = function () {
  console.log('>>> Preloader.loadResources() start');
  // load your resources here
  console.log('<<< Preloader.loadResources() end');
};

Preloader.prototype.create = function () {
  console.log('>>> Preloader.create() start');
  //
  console.log('<<< Preloader.create() end');
};

Preloader.prototype.update = function () {
  console.log('>>> Preloader.update() start');
  // if (!!this.ready) {
    this.game.state.start('menu');
  // }
  console.log('<<< Preloader.update() end');
};

Preloader.prototype.onLoadComplete = function () {
  console.log('>>> Preloader.onLoadComplete() start');
  // this.ready = true;
  console.log('<<< Preloader.onLoadComplete() end');
};

module.exports = Preloader;
