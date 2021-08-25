const Tax = 0.02;

let pen = {
    price: 20,
    sale_price: 40,
}

let profit = ((pen.sale_price - (pen.sale_price * Tax)) - pen.price);

console.log(profit * 1000)