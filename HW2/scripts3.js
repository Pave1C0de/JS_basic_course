/*
Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу (ноль можно считать положительным числом):

    если a и b положительные, вывести их разность,
    если a и b отрицательные, вывести их произведение,
    если a и b разных знаков, вывести их сумму.
*/
function compare(a, b) {
    var c = NaN;
    if (!((a == NaN) || (b == NaN))) {
        if ((a >= 0) && (b >= 0)) {
            c = a - b;
        }
        else if ((a < 0) && (b < 0)) {
            c = a * b;
        } else {
            c = a + b;
        }
    }
    return c;
}

var a = 33;
var b = 3;
var res = compare(a, b);
alert("a= " + a + "; " + "b= " + b + "; " + "result: " + res);

b = -3;
a = -33;
res = compare(a, b);
alert("a= " + a + "; " + "b= " + b + "; " + "result: " + res);

b = 3;
a = -33;
res = compare(a, b);
alert("a= " + a + "; " + "b= " + b + "; " + "result: " + res);

b = NaN;
a = NaN;
res = compare();
alert("a= " + a + "; " + "b= " + b + "; " + "result: " + res);