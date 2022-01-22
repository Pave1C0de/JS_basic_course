/*
5.
Реализовать основные арифметические операции: сложение, вычитание, умножение, деление.
Сделать их в виде функций с двумя параметрами.
Обязательно использовать оператор return.

6.
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций, 
используя функции из пункта 5, и вернуть полученное значение, используя switch.
*/
function add(arg1, arg2) {
    return Number(arg1) + Number(arg2);
}

function sub(arg1, arg2) {
    return Number(arg1) - Number(arg2);
}

function mul(arg1, arg2) {
    return Number(arg1) * Number(arg2);
}

function div(arg1, arg2) {
    return Number(arg1) / Number(arg2);
}

function mathOperation(arg1, arg2, operation) {
    var result = NaN;
    switch (operation) {
        case "add":
            result = add(arg1, arg2);
            break;

        case "sub":
            result = sub(arg1, arg2);
            break;

        case "mul":
            result = mul(arg1, arg2);
            break;

        case "div":
            result = div(arg1, arg2);
            break;

        default:
            break;
    }
    return result;
}
var a = 590;
var b = 44;
var r = mathOperation(a, b, "add");
console.log(r);
console.log(mathOperation(a, b, "sub"));
console.log(mathOperation(a, b, "mul"));
console.log(mathOperation(a, b, "div"))