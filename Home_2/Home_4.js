'use strict';

/* 4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return. */

/**
 * 
 * @param {*} num1 Первый операнд
 * @param {*} num2 Второй операнд
 * @returns Сумма двух чисел 
 */
function sum(num1 = 2, num2 = 3) {
    return num1 + num2;
}
/**
 * 
 * @param {*} num1 Первый операнд
 * @param {*} num2 Второй операнд
 * @returns Разность двух чисел 
 */
function sub(num1 = 2, num2 = 3) {
    return num1 - num2;
}
/**
 * 
 * @param {*} num1 Первый операнд
 * @param {*} num2 Второй операнд
 * @returns Произведение двух чисел 
 */
function multi(num1 = 2, num2 = 3) {
    return num1 * num2;
}
/**
 * 
 * @param {*} num1 Первый операнд
 * @param {*} num2 Второй операнд
 * @returns Деление двух чисел 
 */
function div(num1 = 2, num2 = 3) {
    return num1 / num2;
}

alert(sum());
alert(sub());
alert(multi());
alert(div());

// ВТОРАЯ ВЕРСИЯ( НАПИСАЛ ЕЕ ПЕРВОЙ ТАК КАК НЕ ЗНАЛ ЧТО СЛЕДУЮЩИЕ ЗАДАНИЕ ЗАВИСИЩИЕ ОТ ЭТОГО)


/* let a = parseInt(prompt("Введите первый операнд"));
let b = parseInt(prompt("Введите второй операнд"));
let ab = prompt("Введите оператор (+, -, /, *)");

 */
/**
 *
 * @param {Number} num1 Первый операнд для операций
 * @param {Number} num2 Второй операнд для операций
 * @param {String} scr Оператор для выбора сложения - "+", вычетания - "-", деления - "/", умножения - "*"
 */
/* function score(num1, num2, scr) {
    if (scr == "+") {
        return num1 + num2;
    } else if (scr == "-") {
        return num1 - num2;
    } else if (scr == "/") {
        return num1 / num2;
    } else if (scr == "*") {
        return num1 * num2;
    } else {
        return "Вы ввели, или оператор который не работает в этой функции, или ошиблись в его написании.";
    }

}

alert(score(a, b, ab)) */