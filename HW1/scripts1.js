/*
1.
Задать температуру в градусах по Цельсию, 
используя prompt и вывести через alert соответствующую температуру 
в градусах по Фаренгейту.
Подсказка: расчет идет по формуле Tf = (9 / 5) * Tc + 32, 
где Tf — температура по Фаренгейту, Tc — по Цельсию.
*/
var inCTemp = prompt("Please insert temperature Celsius:")
var fTemp;
fTemp = (9 / 5) * Number(inCTemp) + 32
console.log('Hello world!')
alert("Temperature is: " + fTemp + " F")