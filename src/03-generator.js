// ES5 problems
var myArray = [1, 2, 3, 4, 5]

// Correct, but verbose, only works on arrays
for (var i = 0; i< myArray.length; i++) {
  doStuffWith(myArray[i])
}

// possibly buggy:
for (var i in myArray) {
  doStuffWith(myArray[i])
}

// fixed but verbose
for (var i in myArray) {
  if(myArray.hasOwnProperty(i)) {
      doStuffWith(myArray[i])
    }
}

// ES6

for (var value of myArray) {
  doStuffWith(value)
}

// works with arbitrary objects that implement the iteration protocol:

class Stream {
  next () {
    return {
      value: this.getNextValueFromStream(),
      done: this.isStreamComplete()
    }
  }

  [Symbol.iterator]() {
    return this
  }
}

let s = new Stream()

for (var value of s) {
  console.log('got value', s)
}

// generator functions are shorthand

function *range (start, end) {
  for(let i = start; i<= end; i++) {
    yield i
  }
}

for(let i of range(0, 100)) {
  console.log(i)
}

// some interesting possibilities

async function () {
  let x = await getAsyncValue()
  let [y, z] = await [getParallelValue1(x), getParallelValue2(x)]
  if(await checkStuff(y, z)) {
    console.log('good')
  }
}

getAsyncValue().then(x => {
  return Promise.all([getParallelValue1(x), getParallelValue2(x)])
}).then([y, z] => {
  return checkStuff(y, z)
}).then
