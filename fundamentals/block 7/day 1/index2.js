const fatorial = (number) => number > 0 ? number * fatorial(number - 1) : 1

console.log(fatorial(4))

const longestWord =
    (string) => string
        .split(" ")
        .reduce(
            (accum, word) => word.length > accum.length ? word : accum
        );


console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'