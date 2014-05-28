'use strict';
module.exports = function (grunt) { 

  // load grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    "clean": ["./assets/css/gbm-tetris.css.map", "./assets/css/gbm-tetris.css"],
    "less": {
      "dev": {
        "options": {
          "compress": false,
          "sourceMap": true,
          "sourceMapFilename": "assets/css/gbm-tetris.css.map",
          "sourceMapBasepath": "assets/less/",
          "sourceMapRootpath": "../less/",
          "sourceMapURL": "../css/gbm-tetris.css.map"
        },
        "files": {
         "assets/css/gbm-tetris.css": ["assets/less/*.less"]
        }
      }
    },
    "autoprefixer": {
      "no_dest": {
        "src": ["assets/css/*.css", "!assets/css/*.map"]
      }
    },
    "watch": {
      "styles": {
        "files": ['assets/**/*.less'],
        "tasks": "default"
      }
    }
  });
  grunt.registerTask('default', ['clean', 'less:dev', 'autoprefixer']);
  //grunt.registerTask('build', ['less:production', 'autoprefixer']);
};
