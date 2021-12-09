# Reference Type Coercion
---

### Suppose that
```
let a = {
    valueOf: function() {
        return 'hello';
    }
};
let b = {
    valueOf: function() {
        return 3;
    }
};
let c = {
    valueOf: function() {
        return new Number(3);
    }
};
let d = {
    toString: function() {
        return 123;
    }
};
let e = {
    valueOf: function() {
        return 3;
    }
};
let f = {
    toString: function() {
        return 4;
    }
};

console.log(null + undefined);                                  // NaN
console.log(null + true);                                       // 1
console.log(null + false);                                      // 0
console.log(null + 3);                                          // 3
console.log(null + NaN);                                        // NaN
console.log(null + 'hello');                                    // nullhello
console.log(null + a + b + c + d + e + f);                      // nullhello3[object Object]12334
console.log(undefined + true);                                  // NaN
console.log(undefined + false);                                 // NaN
console.log(undefined + 5);                                     // NaN
console.log(undefined + NaN);                                   // NaN
console.log(undefined + 'hello');                               // undefinedhello
console.log(undefined + a + b + c + d + e + f);                 // undefinedhello3[object Object]12334
console.log(true + false);                                      // 1
console.log(true + 2);                                          // 3
console.log(true + NaN);                                        // NaN
console.log(true + 'hello');                                    // truehello
console.log(true + a + b + c + d + e + f);                      // truehello3[object Object]12334
console.log(false + 4);                                         // 4
console.log(false + NaN);                                       // NaN
console.log(false + 'hello');                                   // falsehello
console.log(false + a + b + c + d + e + f);                     // falsehello3[object Object]12334
console.log(5 + 3);                                             // 8
console.log(5 + NaN);                                           // NaN
console.log(5 + 'hello');                                       // 5hello
console.log(5 + a + b + c + d + e + f);                         // 5hello3[object Object]12334
console.log('hello' + NaN);                                     // helloNaN
console.log('hello' + a + b + c + d + e + f);                   // hellohello3[object Object]12334
```

I leave a link to more examples [here](https://github.com/vre2h/test-force/tree/master/gtu-02), and you can follow the rules for converting reference data types to primitives at [this link](https://javascript.info/object-toprimitive)