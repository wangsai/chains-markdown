# chains-markdown

This grunt task takes a set of markdown files and converts them to HTML. It supports [GFM](http://github.github.com/github-flavored-markdown/) with code highlighting. The code highlighting is done using [highlight.js](http://softwaremaniacs.org/soft/highlight/en/).

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile](http://gruntjs.com/getting-started) with:

```bash
npm install grunt-markdown --save-dev
```

Then add this line to your gruntfile:

```javascript
grunt.loadNpmTasks('chains-markdown');
```

## Documentation
Creating a markdown task is simple. For the basic functionality add the following config in your gruntfile:

```javascript
grunt.initConfig({
  markdown: {
    all: {
      files: [
        {
          expand: true,
          src: 'docs/src/*.md',
          dest: 'docs/html/',
          ext: '.html'
        }
      ]
    }
  }
});

```

Here is an example config using all of the options:

```javascript
grunt.initConfig({
  markdown: {
    all: {
      files: [
        {
          expand: true,
          src: 'docs/src/*.md',
          dest: 'docs/html/',
          ext: '.html'
        }
      ],
      options: {
          gfm: true,
          highlight: manual,
          codeLines: {
            before: '<span>',
            after: '</span>'
          }
      }
    }
  }
});

```
These are the properties that the `markdown` task accepts:

* `files`: This plugin supports use of the [files API](http://gruntjs.com/configuring-tasks#files) introduced in Grunt 0.4.0. Files may be specified using any one of the [Compact Format](http://gruntjs.com/configuring-tasks#compact-format), [Files Objects Format](http://gruntjs.com/configuring-tasks#files-object-format), or [Files Array Format](http://gruntjs.com/configuring-tasks#files-array-format) (as in the above example).

## Options

Options passed directly to the markdown parser.

- __pedantic__: Conform to obscure parts of `markdown.pl` as much as possible.
  Don't fix any of the original markdown bugs or poor behavior.
- __gfm__: Enable github flavored markdown (enabled by default).
- __sanitize__: Sanitize the output. Ignore any HTML that has been input.
- __highlight__: A callback to highlight code blocks.
- __tables__: Enable GFM tables. This is enabled by default. (Requires the
  `gfm` option in order to be enabled).
- __breaks__: Enable GFM line breaks. Disabled by default.
- __smartLists__: Use smarter list behavior than the original markdown.
  Disabled by default. May eventually be default with the old behavior
  moved into `pedantic`.
- __smartypants__: Use "smart" typograhic punctuation for things like quotes
  and dashes.
- __langPrefix__: Set the prefix for code block classes. Defaults to `lang-`.

Most markdown options are passed as-is to the [marked](https://github.com/chjj/marked) markdown parser. The only option that is processed prior to compiling the markdown is the `highlight` option. If you specify `auto` or `manual` the task will handle highlighting code blocks for you use highlight.js. If you pass a custom function as the highlight option it will be used to highlight the code.

* `auto`: Will try to detect the language
* `manual`: will pass the language name from markdown to the highlight function
* `codeLines`: specify text that should wrap code lines

## License
Copyright (c) 2013 WangSai
Licensed under the MIT license.
