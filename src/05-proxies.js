// getters and setters
// old-school
var x = {
  _val: 1,
  getVal: function () {
    return this._val
  },
  setVal: function (v) {
    this._val = v
  }
}

x1.getVal()
x1.setVal(2)

// ES5
var x2 = {
  _val: 1,
  get val() {
    return this._val
  },
  set val(v) {
    this._val = v
  }
}

x2.val
x2.val = 2

// proxies are more powerful

let x3 = new Proxy({_val: 1}, {
  get: function(target, name) {
    return target['_' + name]
  },
  set: function(target, name, value) {
    target['_' + name] = value
  }
})

x3.val
x3.val = 2

x3.name = 'user'
