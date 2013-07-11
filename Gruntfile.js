/*
 * chains-markdown
 * https://github.com/saiwang/chains-markdown
 *
 * Copyright (c) 2013 WangSai
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: 'default'
    },
    markdown: {
      all: {
        options: {
          gfm: true,
          highlight: 'manual'
        },
        files: [
          {
            expand: true,
            cwd: 'test/samples/',
            src: '*.md',
            dest: 'out/',
            ext: '.html'
          }
        ]
      },
      wrap:{
        options: {
          gfm: true,
          highlight: 'manual',
          codeLines: {
            before: '<span>',
            after: '</span>'
          }
        },
        files: [
          {
            expand: true,
            cwd: 'test/samples/',
            src: '*.md',
            dest: 'out2/',
            ext: '.html'
          }
        ]
      },
      allinone: {
        options: {
          gfm: true,
          highlight: 'manual'
        },
        files: [
          {
            src: 'test/samples/*.md',
            dest: 'out3/one.html'
          }
        ]
      }

    },

    jshint: {
      all: ['Gruntfile.js', 'tasks/**.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'markdown']);
  grunt.registerTask('dev', ['watch', 'jshint', 'markdown']);

};
