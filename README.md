# function-promisify
Turns synchronous functions into promise-based

## Installation

```
npm install function-promisify
```

## Usage

```javascript
var promisify = require('promisify');

var multiply = promisify(function (number, multiplier) {
    return number * multiplier;
});

var log = promisify(console.log);

// Here we can treat existing and future values in exactly the same manner
log(multiply(100, 3));
log(multiply(Promise.resolve(200), 4));
log(multiply(300, Promise.resolve(10)));
log(multiply(Promise.resolve(400), Promise.resolve(5)));
```