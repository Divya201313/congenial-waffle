function createCounter(n) {
    let currentValue =n;

    return function() {
        return currentValue++;
    };
}
 const myCounter = createCounter(5);

 console.log(myCounter());
 