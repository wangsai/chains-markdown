/*
 * chains-markdown
 * https://github.com/saiwang/chains-markdown
 *
 * Copyright (c) 2013 WangSai
 * Licensed under the MIT license.
 *
 * grunt-markdown
 * https://github.com/treasonx/grunt-markdown
 *
 * Copyright (c) 2012 James Morrin
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  var async = require('async'),
    inspect = require('eyes').inspector({ stream: null });

  // Internal lib.
  var markdown = require('./lib/markdown').init(grunt);

  grunt.registerMultiTask('markdown', 'Compiles markdown files into html.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      highlight: 'auto'
    });

    grunt.log.debug(inspect(this.files));

    // Iterate over all specified file groups.
    async.eachSeries(this.files, function (file, next) {
        convert(file.src, file.dest, next);
    }.bind(this), this.async());

    function convert(src, dest, next){

      var yfm;

      var mdcontent = src.map(function(file){
        var c = grunt.file.read(file),
          y = c.match(/^-{3}[\w\W]+?-{3}/);

        if(y) {
          yfm = y[0];
        }

        return c.replace(/^-{3}[\w\W]+?-{3}/, ''); //remove yaml-front-matter
      }).join('\n');

      var content = markdown.markdown(
        mdcontent,  
        options
      );

      if(yfm) {
        content = yfm + '\n' + content;
      }

      grunt.file.write(dest, content);
      grunt.log.writeln('File "' + dest + '" created.');
      next();
    }
  });

};
