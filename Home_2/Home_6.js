'use strict';

/* 6**. (Это задание не является частью курса, можете его не делать, оно для тех кому мало
    обычных заданий, требует времени и возможно гугления, делайте по желанию.)
    Программа должна спросить у пользователя число, это будет количество денег, которое он хочет
    положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
    "Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
    "Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
    "Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
    То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного
    числа.
    Подсказки, что я использовал (ваш подход может отличаться):
    1) В javascript нет функции, которая возвращает последнюю цифру, но зато мы можем
    получить последний символ из строки достаточно просто.
    2) Я использовал String() для приведения к строке
    https://codepen.io/IgorKubikov/pen/qQmoJJ?editors=0011
    3) Узнать длину строки https://codepen.io/IgorKubikov/pen/vQmRbq?editors=0011
    Подробнее можно почитать здесь
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length
    4) Чтобы получить конкретный символ в строке я использовал это
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
    5) Я также использовал switch, а конкретно нам нужно будет одно действие для нескольких
    case (т.е. если у нас 500 рублей, 47 рублей, 99 рублей и т.д. – у нас для нескольких цифр на
    конце одно слово «рублей»). Это можно посмотреть здесь:
    https://developer.mozilla.org */

/**
 * @returns Счет в банке с правильным написание падежа
 */
function cur() {
    let ruble = parseInt(prompt("Сколько вы хотите положить на счет в банк ?"))
    let str_rub = String(ruble)
    let str_len = str_rub.length
    let a = str_rub.charAt(str_len - 1)
    let b = str_rub.charAt(str_len - 2) + a
    switch (b) {
        case "11":
        case "12":
        case "13":
        case "14":
            return `Ваша сумма в ${ruble} рублей успешно зачислена.`;
        default:
            if (a >= 5 && a <= 9) {
                return `Ваша сумма в ${ruble} рублей успешно зачислена.`;
            }
            else if (a == 1) {
                return `Ваша сумма в ${ruble} рубль успешно зачислена.`;
            }
            else if (a >= 2 && a <= 4) {
                return `Ваша сумма в ${ruble} рубля успешно зачислена.`;
            }
            else
                return "Что-то пошло не так!";
    }

}

alert(cur())