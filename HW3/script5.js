/*
5. *Нарисовать пирамиду с помощью console.log, 
как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/
function pyramid(base_width, sign) {
    for (let i = 1, str = "*"; i <= base_width; i++, str += "*") {
        console.log(str);
    }
}

pyramid(20);