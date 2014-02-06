// © 2014 QUILLU INC.
// things GruntFile
'use strict';

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // JSON
    jsonlint: {
      src: [ 'package.json', '.jshintrc']
    },

    // JS
    jshint:{
      options:{
        jshintrc: '.jshintrc'
      },
      files: ['Gruntfile.js', '*.js']
    },


    shell: {
      install: {
        command: 'npm install && npm prune',
        options: {
          stdout: true,
          stderr: true,
          failOnError: true
        }
      },

      test: {
        command: 'node test.js',
        options: {
          stdout: true,
          stderr: true,
          failOnError: true
        }
      }
    },

    push: {
      options: {
        files: ['package.json'],
        releaseBranch: ['master'],
        add: false,
        commit: false,
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: 'origin',
        npm: true,
        npmTag: 'Release v%VERSION%',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
      }
    }

  });

  // Tasks
  grunt.registerTask('install', 'Install dependencies', 'shell:install');
  grunt.registerTask('lint', ['jsonlint', 'jshint']);
  grunt.registerTask('test', ['shell:test']);
  // Default
  grunt.registerTask('default', ['lint', 'test']);

};
