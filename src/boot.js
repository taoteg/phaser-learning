function Boot() {
  console.log('>>> Boot() start');
  var scale_minWidth = 480;
  var scale_minHeight = 270;
  var scale_maxWidth = 960;
  var scale_maxHeight = 540;
  var scale_forceOrientation = true;
  var scale_pageAlignHorizontally = true;
  var scale_setScreenSize = true;
  console.log('<<< Boot() end');
}

Boot.prototype.preload = function () {
  console.log('>>> Boot.preload() start');
  this.load.image('preloader', 'assets/preloader.gif');
  console.log('<<< Boot.preload() end');
};

Boot.prototype.create = function () {
  console.log('>>> Boot.create() start');
  this.game.input.maxPointers = 1;

  if (this.game.device.desktop) {
    this.game.scale.pageAlignHorizontally = true;
  } else {
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.minWidth =  scale_minWidth;
    this.game.scale.minHeight = scale_minHeight;
    this.game.scale.maxWidth = scale_maxWidth;
    this.game.scale.maxHeight = scale_maxHeight;
    this.game.scale.forceOrientation(scale_forceOrientation);
    this.game.scale.pageAlignHorizontally = scale_pageAlignHorizontally;
    this.game.scale.setScreenSize(scale_setScreenSize);
  }
  this.game.state.start('preloader');
  console.log('<<< Boot.create() end');
};

module.exports = Boot;
