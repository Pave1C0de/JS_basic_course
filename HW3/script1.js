/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/

function prime_numbers() {
    var res = [];
    var i = 0;
    var j = 0;
    var count = 0;
    while (j < 100) {
        count = 0;
        i = 1;
        while (i <= 100) {
            if ((j % i == 0) && (i <= j)) {
                count++;
            }
            i++;
        }
        if ((count == 2) || (count == 1)) {
            res[res.length] = j;
        }
        j++;
    }
    return res;
}

var res = prime_numbers();
console.log(res);