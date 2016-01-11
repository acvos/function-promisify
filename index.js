var lift = require('function-lift');

function promiseUnit(x) {
  return Promise.resolve(x);
}

function bindToPromise(func) {
  return function () {
    var promisedArgs = Array.prototype.slice.call(arguments, 0);

    return Promise.all(promisedArgs).then(function (args) {
        return func.apply(undefined, args);
    })
  };
}

module.exports = lift(promiseUnit, bindToPromise);
