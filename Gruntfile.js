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
      }

    },

    jshint: {
      all: ['Gruntfile.js', 'tasks/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        node: true
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
