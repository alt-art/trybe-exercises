"use strict";

function fibonancci(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        return (fibonancci(num - 2) + fibonancci(num - 1));
    }
}

for (let i = 0; i < 12; i++)
    console.log(fibonancci(i));
