let y = {
  x: 1
}

y.__my_data__ = 123
let mysym = Symbol()

y[mysym] = 123

let mysym2 = Symbol()
y[mysym2] = 'xyz'

let x = Symbol('x')
let x2 = Symbol('x')

x !== x2

// 'private' properties

{
  let method = Symbol('method')

  class C {
    [method]() {
      // do stuff
    }
  }

  var c = new C
  c[method]()
}

c.method // undefined

C.prototype.getOwnPropertySymbols() // returns [method]

Symbol.iterator // used by the iteration protocol

let sym = Symbol.for('my-symbol')
Symbol.keyFor(sym) // 'my-symbol'
