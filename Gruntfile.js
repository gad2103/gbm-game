'use strict';
module.exports = function (grunt) { 

  // load grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    "clean": ["./assets/css/gbm-tetris.css.map", "./assets/css/gbm-tetris.css", "assets/img/spritesheet.png"],
    "sass": {
      "dev": {
        "options": {
          "sourcemap": true
        },
        "files": {
         "assets/css/gbm-tetris.css": ["assets/sass/*.scss"]
        }
      }
    },
    "autoprefixer": {
      "no_dest": {
        "src": ["assets/css/*.css", "!assets/css/*.map"]
      }
    },
    "sprite": {
      "all": {
        "src": "assets/img/*.png",
        "destImg": "assets/img/spritesheet.png",
        "destCSS": "assets/css/sprites.css",
        "algorithm": "left-right",
        "cssVarMap": function(sprite){
          sprite.name = "sprite-" + sprite.name;
        }
      }
    },
    "watch": {
      "styles": {
        "files": ['assets/**/*.scss'],
        "tasks": "default"
      }
    }
  });
  grunt.registerTask('default', ['clean', 'sprite:all', 'sass:dev', 'autoprefixer']);
  grunt.registerTask('sprites', ['sprite:all']);
};
