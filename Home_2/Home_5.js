'use strict';

/* 5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение. */

let a = parseInt(prompt("Введите первый операнд"));
let b = parseInt(prompt("Введите второй операнд"));
let ab = prompt("Введите оператор (+, -, /, *)");

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

/**
 *
 * @param {Number} num1 Первый операнд для операций
 * @param {Number} num2 Второй операнд для операций
 * @param {String} scr Оператор для выбора сложения - "+", вычетания - "-", деления - "/", умножения - "*"
 */
function score(num1, num2, scr) {
    switch (scr) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            return num1 / num2;
        case "*":
            return num1 * num2;
    }
}

alert(score(a, b, ab))