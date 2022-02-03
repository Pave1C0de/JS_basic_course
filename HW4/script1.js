/*
1.
Написать функцию, преобразующую число в объект. 
Передавая на вход число от 0 до 999, мы должны 
получить на выходе объект, в котором в соответствующих 
свойствах описаны единицы, десятки и сотни. Например, 
для числа 245 мы должны получить следующий объект: 
{'единицы': 5, 'десятки': 4, 'сотни': 2}. 
Если число превышает 999, необходимо выдать 

соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

function num2obj(num) {
    let hundTenUnits = {
        hundreds: 0,
        tens: 0,
        units: 0
    };
    if (Math.floor(num / 100) < 10) {
        hundTenUnits.hundreds = Math.floor(num / 100);
        hundTenUnits.units = num % 10;
        hundTenUnits.tens = num - (100 * hundTenUnits.hundreds + hundTenUnits.units);
        return hundTenUnits;
    }
    else {
        console.log("соответствующее сообщение")
        return hundTenUnits;
    }

}
var res = num2obj(123);
console.log(res);
var res = num2obj(1023);
console.log(res);