console.log('>>> main.js start');

// Configure game object.
var canvasWidth = 960;                      // number: width in game pixels, string: width in percent (0-100) of parent container.
var canvasHeight = 540;                     // number: height in game pixels, string: height in percent (0-100) of parent container.
var renderMode = Phaser.AUTO;               // Phaser.CANVAS, Phaser.WEBGL, Phaser.AUTO.
var rootElement = 'phaser-school-game';     // Parent container element.
// var transparentCanvas = true;               // Transparency of canvas element.
// var notPixelart = true;                     // Antialias (false if pixel art).
// var physicsConfgObject = null;
// var stateObject = { preload: preload, create: create, update: update };

// Create new instance of Phaser game object.
// var game = new Phaser.Game(canvasWidth, canvasHeight, renderMode, rootElement, stateObject, transparentCanvas, notPixelart, physicsConfgObject);
var game = new Phaser.Game(canvasWidth, canvasHeight, renderMode, rootElement);

// Load scripts.
game.state.add('boot', require('./boot'));
game.state.add('preloader', require('./preloader'));
game.state.add('menu', require('./menu'));
game.state.add('game', require('./game'));
game.state.start('boot');

console.log('<<< main.js end');