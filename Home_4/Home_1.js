'use strict';

/* 1.
(это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на
вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
Вам может пригодиться:

Number.isInteger(value) – функция проверяет, является ли переданное число целым, подробнее здесь
https://mzl.la/2XCVSsx

Math.floor(value) - метод возвращает целое число, которое меньше или равно данному числу (проще
говоря округляет в меньшую сторону), подробнее здесь https://mzl.la/2Qx42SO .

Используйте также остаток от деления на 10, например 123 % 10 будет 3

Вам также может пригодится делить число на 100 и на 10. */

class Number_Class {
    constructor(units, tens, hundreds) {
        this.units = units;
        this.tens = tens;
        this.hundreds = hundreds;
    }
}

let num_ran = Math.floor((Math.random() * 1000))

function num_obj(num) {
    alert(num)
    let number_arr = []
    while (true) {
        let num_ans = num % 10
        number_arr.push(num_ans)
        num = Math.floor(num / 10)
        if (num < 10) {
            num_ans = num
            number_arr.push(num_ans)
            break;
        }
    }
    if (number_arr.length <= 2) {
        number_arr.push(0)
    }
    return number_arr
}

let a = num_obj(num_ran)
a = new Number_Class(a[0], a[1], a[2])
alert(`${a.units} - единиц, ${a.tens} - десяток, ${a.hundreds} - сотен`)