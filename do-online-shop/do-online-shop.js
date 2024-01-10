var products = [
    {id:1, product:'pen' , price:5000},
    {id:2, product:'shoes' , price:12000},
    {id:3, product:'bag' , price:50000},
    {id:4, product:'laptop' , price:500000},

]
var userBasket =[
    
    {id:1, product:'milk' , price:2000},
    {id:2, product:'mobile' , price:12000},
]

var get_nameProduct = prompt("Enter name your product :")
var Get_userBasket;

var is_shop = products.some(function (product) {
    if (product.product === get_nameProduct) {
        Get_userBasket = product;
        return true;
    }

}
    
);
console.log(is_shop)
if (is_shop ===true) {
    var newprduct_basket =[
        {
            id: Get_userBasket.id,
            product : Get_userBasket.product,
            price : Get_userBasket.price
        }
        
    ]
    console.log(newprduct_basket)
    alert("Product is avilable")
} else {
    alert("Product is notavilable")
}
