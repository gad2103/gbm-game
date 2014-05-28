'use strict';
module.exports = function (grunt) { 

  // load grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    "less": {
      "dev": {
        "options": {
          "compress": false,
          "sourceMap": true,
          "sourceMapFilename": "assets/css/gbm-tetris.css.map",
          "sourceMapBasepath": "assets/css/"
        },
        "files": {
          "expand": true,
          "src": ["assets/less/**/*.less"],
          "dest": "assets/css/gbm-tetris.css"
        }
      }
    },
    "autoprefixer": {
      "no_dest": {
       "src": "assets/css/*.css"
      }
    },
    "watch": {
        "files": ['<%= less.dev.src %>'],
        "tasks": "default"
    }
  });
  grunt.registerTask('default', ['less:dev', 'autoprefixer']);
  //grunt.registerTask('build', ['less:production', 'autoprefixer']);
};
