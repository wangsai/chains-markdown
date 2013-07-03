---
layout: docs
title: Front-matter
prev_section: configuration
next_section: posts
permalink: /docs/frontmatter/
---

The front-matter is where Jekyll starts to get really cool. Any file that
contains a [YAML](http://yaml.org/) front matter block will be processed by
Jekyll as a special file. The front matter must be the first thing in the file
and must take the form of valid YAML set between triple-dashed lines. Here is a
basic example:

```
---
layout: post
title: Blogging Like a Hacker
---
```

Between these triple-dashed lines, you can set predefined variables (see below
for a reference) or even create custom ones of your own. These variables will
then be available to you to access using Liquid tags both further down in the
file and also in any layouts or includes that the page or post in question
relies on.

Source https://raw.github.com/mojombo/jekyll/gh-pages/docs/frontmatter.md 