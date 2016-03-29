Babel is the premier javascript transpilier: it converts javascrpt to
javascript, running various transforms. It supports ES6, experimental ES7/ES-
next features, as well as nonstandard transforms, like React's JSX syntax.

Out of the box it does nothing though. You have to tell Babel what
transformations you want. The simplest way is with a .babelrc file. Use the
one in this repo as an example.

Babel is a node project, you can use it in various ways, but the simplest is to just use the cli:

```
$ npm install --save-dev babel-cli
```

Then you need some transforms. You can pick them by hand, or just use a preset that sets up many transforms. To use ES6, get the `es2015` preset

```
$ npm install --save-dev babel-preset-es2015
```

Now you can run babel

```
$ babel src/00-let-const-arrow.js -o build/00-let-const-arrow.js
```
