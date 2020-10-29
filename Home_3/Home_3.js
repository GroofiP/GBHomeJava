'use strict';

/* 3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
15 %, можете использовать метод forEach https://mzl.la/1AOMMWX :*/

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function fn(value, idx) {
    let sale = parseInt(value.price) * 0.85;
    products[idx].price = sale;
});

console.log(alert(`${products[0].id} продукт со скидкой : ${products[0].price}, ${products[1].id} продукт со скидкой : ${products[1].price}, ${products[2].id} продукт со скидкой : ${products[2].price}`));