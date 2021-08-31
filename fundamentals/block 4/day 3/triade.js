let num = 5;

//// Square

// *****
// *****
// *****
// *****
// *****

for (let i = 0; i < num; i++) {
    console.log("*".repeat(num))
}

//// Decline

// *
// **
// ***


console.log("In decline:");

for (let i = 1; i <= num; i++) {
    console.log("*".repeat(i));
}

//// Decline flipped

// *
// **
// ***

console.log("\nIn decline flipped:");

for (let i = 1; i <= num; i++) {
    console.log(`${" ".repeat(num - i)}${"*".repeat(i)}`);
}

//// Pyramid

//   *
//  ***
// *****

console.log("\nIn pyramid:");

let numDouble = num * 2 - 1;

let half = (numDouble / 2);
for (let i = 1; i <= numDouble; i++) {
    if (i % 2 === 1) {
        console.log(`${" ".repeat(half)}${"*".repeat(i)}`);
        half--;
    }
}

//// Pyramid border

//    *
//   * *
//  *****

console.log("\nPyramid border:")

if (numDouble % 2 === 1) {
    let half = (numDouble / 2);
    console.log(`${" ".repeat(half)}*`);
    for (let i = 1; i < numDouble - 2; i++) {
        if (i % 2 === 1) {
            console.log(`${" ".repeat(half - 1)}*${" ".repeat(i)}*`);
            half--;
        }
    }
    console.log("*".repeat(num * 2 - 1))
}
