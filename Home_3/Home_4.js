'use strict';

/* 4.
Перед вами находится массив с продуктами в интернет - магазине.Вам нужно:
1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2. Отсортируйте товары по цене(от низкой цены к высокой), можете использовать метод sort
https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 */

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: [
            'dfdf.png',
            'dffffdgg'
        ]
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

/**
 * @param {*} el Поиск фото по формату 
 * @param {*} value Массив с продуктами
 * @return Массив с фотографиям продуктов  
 */
function photo_sort(el, value = products) {
    let photo_search = [];
    for (let i = 0; i < value.length; i++) {
        let photo_box = value[i].photos;
        if (photo_box != undefined) {
            photo_box.filter(function (val) {
                let a = val.includes(el);
                if (a == true) {
                    photo_search.push(val);
                }
            })
        }
    }
    return alert(photo_search)
}

photo_sort('jpg')

/**
 * 
 * @param {*} value Массив с продуктами
 * @return Массив с низкой до высокой ценой продуктов 
 */
function price_sort(value = products) {
    let price_search = [];
    for (let i = 0; i < value.length; i++) {
        let price_box = value[i].price;
        price_search.push(price_box);
    }
    price_search.sort(function (a, b) {
        return a - b;
    })
    return alert(price_search);
}

price_sort()