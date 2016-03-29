// ES5

function Parent (param) {
  this.param = param
}

Parent.prototype.method1 = function () {
  console.log('parent.method1')
}

function Child (param, otherParam) {
  Parent.call(this, param)
  this.otherParam = otherParam
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

Child.prototype.method1 = function () {
  console.log('begin child.method1')
  Parent.prototype.method1.call(this)
  console.log('end child.method1')
}

var c1 = new Child(1, 2)
c1.method1()
// expected output:
// begin child.method1
// parent.method1
// end child.method1

// ES6
class ParentC {
  constructor (param) {
    this.param = param
  }
  method1() {
    console.log('parent.method1')
  }
}

class ChildC extends ParentC {
  constructor(param, otherParam) {
    super(param)
    this.otherParam = otherParam
  }
  method1() {
    console.log('child.method1 start')
    super.method1()
    console.log('child.method1 end')
  }
}

let c2 = new ChildC(1, 2)
c2.method1()
// expected output:
// begin child.method1
// parent.method1
// end child.method1
