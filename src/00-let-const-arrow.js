// let
function withVar () {
  var x = 1;
  (function () {
    var y = 2;
    // do stuff
  }());
}

function withLet () {
  let x = 1;
  {
    let x = 2;
    console.log(x)
    // do stuff
  }
}

// const
const x = 1;
// x = 2; // error

const myObj = {
  x: 1,
  setX(x) {
    this.x = x
  }
};
myObj.setX(2) // valid

// arrow function
function ES5Class() {}
ES5Class.prototype.done = function(){}
// we want to do an async operation, and call this.done(results) at the end
// 2 ways in ES5:

ES5Class.prototype.withBind = function () {
  asyncOp(this.done.bind(this))
}

ES5Class.prototype.withClosure = function () {
  var self = this
  asyncOp(function (results) { self.done(results) })
}

// ES6 arrow functions, solve the issue
ES5Class.prototype.withArrow = function () {
  asyncOp(results => this.done(results))
}
