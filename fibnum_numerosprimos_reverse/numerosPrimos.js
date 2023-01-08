Number.prototype.isPrime = function() {
    let raiz = Math.sqrt(this);
    for( let i=2; i <= raiz; i++ ) {
        if( this % i === 0 ) {            
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while( primeCount < 1e6 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 1,000,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// The 100,000th prime number is 1299709
// objetos.js:21
// This took 4373.224799990654 milliseconds to run

// The 1,000,000th prime number is 15485863
// objetos.js:21
// This took 132141.38620001078 milliseconds to run