/*
2.
Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. 
Какими объектами можно заменить их элементы? Реализуйте такие объекты.
 */

/*
3.
(*) Подумать над глобальными сущностями. 
К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, 
но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую 
структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.
 */
var shopping_basket = [
    { name: "1", price: 3.99 },
    { name: "2", price: 8.24 },
    { name: "3", price: 100 },
    { name: "4", price: 99.99 },
    { name: "5", price: 330 }]

let product = {
    productID: 0,
    type: "",
    name: "",
    brand: "",
    country: "",
    quantity: 0,
    price: 0,
    addProducts: function (nums) {
        if ((typeof nums === 'number') && (nums >= 0)) {
            this.quantity += nums;
        }
    },
    subProducts: function (nums) {
        if ((typeof nums === 'number') && (nums >= 0) && (this.quantity >= nums)) {
            this.quantity -= nums;
        }
    }
};

let cart = {
    userID: 0,
    buys: [],
    commonPrice: 0,
    commonquantity: 0,
    addToCart: function (...args) {
        for (i in args) {
            if (typeof args[i] === "object" && args[i].quantity > 1) {
                args[i].subProducts(1);
                this.buys.push(args[i]);
                this.commonPrice += args[i].price;
                this.commonquantity += 1;
            }
        }

    }
};

let product1 = { ...product };
product1.price = 100;
product1.name = "булка";
product1.quantity = 10;
var product2 = { ...product };
product2.price = 200;
product2.name = "рубашка";
product2.quantity = 3;
var product3 = { ...product };
product3.price = 200;
product3.name = "яблоки";
product3.quantity = 1000;
var product4 = { ...product };
product4.price = 400;
product4.name = "Молоко";
product4.quantity = 200;


console.log("количество товара в магазине до добавления в корзину", product1.quantity)
var my_cart = { ...cart };
my_cart.addToCart(product1, product2, product3);
console.log("количество товара в магазине после добавления в корзину", product1.quantity);

console.log("Товары в корзине", my_cart.buys);
console.log("Стоимость товаров в корзине", my_cart.commonPrice);