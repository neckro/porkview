var createEngine = require('voxel-engine');
var extend = require('extend');
var blocks = require('./blocks');

module.exports = function(opt) {
  var game;
  var materials = [];

  for (var i = 0; i < 128; i++) {
    if (blocks[i] && blocks[i][0].texture) materials[i] = blocks[i][0].texture;
  }

  var defaults = {
    startingPosition: [0, 0, 100],
    materials: materials,
    texturePath: './textures/',
    generate: function(x, y, z) {
      return (y === -10 ? 4 : 0);
    }
  };
  opt = opt || {};
  extend(defaults, opt);

  game = createEngine(defaults);
  return game;
};
