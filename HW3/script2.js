/*
2. С этого урока начинаем работать с функционалом интернет-магазина. 
Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины 
в зависимости от находящихся в ней товаров.
*/
var shopping_basket = [
    { name: "1", price: 3.99 },
    { name: "2", price: 8.24 },
    { name: "3", price: 100 },
    { name: "4", price: 99.99 },
    { name: "5", price: 330 }
];
function countBasketPrice(shopping_basket) {
    var cost_of_purchases = 0;
    for (var i in shopping_basket) {
        cost_of_purchases += shopping_basket[i].price;
    }
    return cost_of_purchases;

}

var res = countBasketPrice(shopping_basket);
console.log(res);