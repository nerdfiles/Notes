# Notes on Programming

## SOLID

**Single responsibility Principle (SRP)** — A class should have one and only 
one reason to change, meaning that a class should only have one job.

**Open-closed Principle (OCP)** — Objects or entities should be open for 
extension, but closed for modification.

```
    const shapeInterface = (state) => ({
      type: 'shapeInterface',
      area: () => state.area(state)
    })

    const square = (length) => {
      const proto = {
        length,
        type : 'Square',
        area : (args) => Math.pow(args.length, 2)
      }
      const basics = shapeInterface(proto)
      const composite = Object.assign({}, basics)
      return Object.assign(Object.create(composite), {length})
    }

    const areaCalculator = (s) => {
      const proto = {
        type: 'areaCalculator',
        sum() {
          const area = []
          for (shape of this.shapes) {
            if (Object.getPrototypeOf(shape).type === 'shapeInterface') {
              area.push(shape.area())
            } else {
              throw new Error('this is not a shapeInterface object')
            }
          }

          return area.reduce((v, c) => c += v, 0)
        }
      }

      return Object.assign(Object.create(proto), {shapes: s})
    }
```

Liskov substitution principle — Let q(x) be a property provable about objects 
of x of type T. Then q(y) should be provable for objects y of type S where S 
is a subtype of T. In other words, as simple as that, a subclass should 
override the parent class methods in a way that does not break functionality 
from a client’s point of view.

```
    const volumeCalculator = (s) => {
      const proto = {
        type: 'volumeCalculator'
      }
      const areaCalProto = Object.getPrototypeOf(areaCalculator())
      const inherit = Object.assign({}, areaCalProto, proto)
      return Object.assign(Object.create(inherit), {shapes: s})
    }
```

Interface segregation principle — A client should never be forced to implement 
an interface that it doesn’t use or clients shouldn’t be forced to depend on 
methods they do not use.

```
    const manageShapeInterface = (fn) => ({
      type: 'manageShapeInterface',
      calculate: () => fn()
    })

    const circle = (radius) => {
      const proto = {
        radius,
        type: 'Circle',
        area: (args) => Math.PI * Math.pow(args.radius, 2)
      }  
      const basics = shapeInterface(proto)
      const abstraccion = manageShapeInterface(() => basics.area())
      const composite = Object.assign({}, basics, abstraccion)
      return Object.assign(Object.create(composite), {radius})
    }

    const cubo = (length) => {
      const proto = {
        length,
        type   : 'Cubo',
        area   : (args) => Math.pow(args.length, 2),
        volume : (args) => Math.pow(args.length, 3)
      } 
      const basics  = shapeInterface(proto)
      const complex = solidShapeInterface(proto)
      const abstraccion = manageShapeInterface(
        () => basics.area() + complex.volume()
      )
      const composite = Object.assign({}, basics, abstraccion)
      return Object.assign(Object.create(composite), {length})
    }
```

Dependency inversion principle — Entities must depend on abstractions not on 
concretions. It states that the high level module must not depend on the low 
level module, but they should depend on abstractions. From a functional point 
of view, these containers and injection concepts can be solved with a simple 
higher order function, or hole-in-the-middle type pattern which are built 
right into the language.

```
    const manageShapeInterface = (fn) => ({
      type: 'manageShapeInterface',
      calculate: () => fn()
    })

    const square = (radius) => {
      // code
     
      const abstraccion = manageShapeInterface(() => basics.area())
     
      // more code ...
    }

    const cubo = (length) => {
      // code 
      const abstraccion = manageShapeInterface(
        () => basics.area() + complex.volume()
      )
      // more code ...
    }
```

---------------------------------------------------------------------------------

## OLOO, Composition, Functionalism

Closure — Closures are commonly used to give objects data privacy. Data 
privacy is an essential property that helps us program to an interface, not an 
implementation. This is an important concept that helps us build more robust 
software because implementation details are more likely to change in breaking 
ways than interface contracts.

In functional programming, closures are frequently used for partial 
application & currying.

Application: The process of applying a function to its arguments in order to 
produce a return value.

Partial Application: The process of applying a function to some of its 
arguments. The partially applied function gets returned for later use. Partial 
application fixes (partially applies the function to) one or more arguments 
inside the returned function, and the returned function takes the remaining 
parameters as arguments in order to complete the function application.

```
    const partialApply = (fn, ...fixedArgs) => {
      return function (...remainingArgs) {
        return fn.apply(this, fixedArgs.concat(remainingArgs));
      };
    };
```

Composition — Function composition is the process of combining two or more 
functions to produce a new function. Composing functions together is like 
snapping together a series of pipes for our data to flow through.

```
    const curry = fn => (...args) => fn.bind(null, ...args);

    const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

    const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

    const tap = curry((fn, x) => {
      fn(x);
      return x;
    });

    const trace = label => {
      return tap(x => console.log(`== ${ label }:  ${ x }`));
    };

    const map = curry((fn, arr) => arr.map(fn));

    const join = curry((str, arr) => arr.join(str));

    const toLowerCase = str => str.toLowerCase();

    const split = curry((splitOn, str) => str.split(splitOn));

    const toSlug1 = compose(
      encodeURIComponent,
      join('-'),
      map(toLowerCase),
      split(' ')
    );

    console.log(toSlug1('JS Cheerleader')); // 'js-cheerleader'

    const toSlug2 = pipe(
      split(' '),
      map(toLowerCase),
      join('-'),
      encodeURIComponent
    );

    console.log(toSlug2('JS Cheerleader')); // 'js-cheerleader'

    const toSlug = pipe(
      trace('input'),
      split(' '),
      map(toLowerCase),
      trace('after map'),
      join('-'),
      encodeURIComponent
    );

    console.log(toSlug('JS Cheerleader'));
```

## Factory vs Class vs Constructor 

### Factory —

```
    const proto = {
      drive () {
        console.log('Vroom!');
      }
    };

    const factoryCar = () => Object.create(proto);

    const car3 = factoryCar();
    console.log(car3.drive());
```

### Constructor —

```
    function ConstructorCar () {}

    ConstructorCar.prototype.drive = function () {
      console.log('Vroom!');
    };

    const car2 = new ConstructorCar();
    console.log(car2.drive());
```

### Class —

```
    class ClassCar {
      drive () {
        console.log('Vroom!');
      }
    }

    const car1 = new ClassCar();
    console.log(car1.drive());
```

## Factory vs Class

### Factory Pros: 

* Return any arbitrary object and use any arbitrary prototype. 
* No refactoring worries
* No `new`
* Standard `this` behavior
* No deceptive `instanceof`
* Some people like the way `myFoo = createFoo()` reads

### Factory Cons:

* Doesn’t create a link from the instance to Factory.prototype — but this is 
  actually a good thing because you won’t get a deceptive instanceof. Instead, 
  instanceof will always fail. See benefits.
* this doesn’t refer to the new object inside the factory. See benefits.
* It may perform slower than a constructor function in micro-optimization 
  benchmarks. Be sure to test in the context of your app if this is a concern 
  for you.

### Class Pros:

* Convenient, self-contained syntax.
* A single, canonical way to emulate classes in JavaScript. Prior to ES6, 
  there were several competing implementations in popular libraries.
* More familiar to people from a class-based language background.

### Class Cons:

* Temptation for users to create problematic class hierarchies using the 
  extends keyword.
* the fragile base class problem, 
* the gorilla banana problem, 
* the duplication by necessity problem
* It’s worth noting that both constructors and factories can also be used to 
  create problematic inheritance hierarchies, but with the `extends` keyword, 
  class creates an affordance that leads you down the wrong path. In other 
  words, it encourages you to think in terms of inflexible (and often wrong) 
  is-a relationships, rather than the more flexible compositional has-a or 
  can-do relationships.

