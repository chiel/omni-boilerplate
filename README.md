# Omni Boilerplate

Omni boilerplate is a base which help you set up a cms built with [omni][omni].
All it does is include gulp and omni and enable you to get the basic cms running
in seconds.


## Installation

```
$ git clone https://github.com/chielkunkels/omni-boilerplate
$ cd omni-boilerplate
$ npm install
$ ./node_modules/.bin/gulp
```

There, done. For convenience's sake you can also install [gulp][gulp] globally;
then you can just `gulp`.


## How it works

The boilerplate scans the `node_modules` directory and each directory that
starts with `omni.cm-` will be loaded as a module into the cms.

Modules should follow the omni module structure described in the [omni][omni]
readme.

[omni]: https://github.com/chielkunkels/omni
[gulp]: http://gulpjs.com/
