"use strict";

function fibonacci(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        return (fibonacci(num - 2) + fibonacci(num - 1));
    }
}

for (let i = 0; i < 12; i++)
    console.log(fibonacci(i));
