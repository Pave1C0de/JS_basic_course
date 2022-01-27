/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/

function prime_numbers() {
    var res = [];
    var arr = [...Array(100).keys()];
    var i = 2;
    var j = 0;
    var len = arr.length;
    while (i <= 9) {
        count = 0;
        while ((j < len)) {
            if ((arr[j] % i == 0) && (i < arr[j])) {
                arr.splice(j, 1);
                len = arr.length;
            }
            j++;
        }
        j = 0;
        i++;
    }
    return arr;
}

var res = prime_numbers();
console.log(res);