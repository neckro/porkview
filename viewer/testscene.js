var porkview = require('./porkview');
var game = porkview();
window.game = game;

var container = document.getElementById('container');
game.appendTo(container);
game.requestPointerLock(container);
