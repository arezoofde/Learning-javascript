var products =[
    {id:1 , name:'pen' , price:20000},
    {id:2 , name:'kif' , price:500},
    {id:3 , name:'shoes' , price:20000},
    {id:4 , name:'milk' , price:1000},
    {id:5 , name:'mouse' , price:52000},
    {id:6 , name:'mobile' , price:72000}

]
sum =0;
var post = 0;
//var user_product = prompt("لطفا اسم محصول خود را وارد کنید :")
// array map
var filter_product = products.filter(function(product) {
    return product.price > 10000
})
var post_price = filter_product .length * 1000;

console.log("filter_product",post_price)

products.forEach(function (product) {
    sum += product.price;
})
var total_price_user = sum + post_price;
console.log("user Basket : ",total_price_user )

