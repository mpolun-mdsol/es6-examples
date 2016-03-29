// revealing module pattern
var Module = (function () {
  var Module = window.Module || {}
  Module.SubModule = Module.SubModule || {}
  Module.Submodule.method = function () {
    Deps.one()
    Deps.two()
  }

  return Module
}())

// AMD
// in file 'module/submodule/method'
define(['deps/one', 'deps/two'], function (dep1, dep2) {
  return function () {
    dep1()
    dep2()
  }
})

// CommonJS
// in file 'module/submodule/method'
var dep1 = require('deps/one')
var dep2 = require('deps/two')

module.exports = function () {
  dep1()
  dep2()
}

// ES6
// in file 'module/submodule/method'
import {one, two} from 'deps'
export function method() {
  one()
  two()
}
