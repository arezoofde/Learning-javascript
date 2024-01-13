console.log("hiii")
let allProducts = [
    { id: 1, title: 'Album 1', price: 12.93, img: './Images/Album 1.png', count : 1 },
    { id: 2, title: 'Album 2', price: 21, img: './Images/Album 2.png', count : 1 },
    { id: 3, title: 'Album 3', price: 33, img: './Images/Album 3.png', count : 1 },
    { id: 4, title: 'Album 4', price: 41.98, img: './Images/Album 4.png', count : 1 },
    { id: 5, title: 'Coffee', price: 98, img: './Images/Cofee.png', count : 1 },
    { id: 6, title: 'Shirt', price: 65.33, img: './Images/Shirt.png', count : 1 },
]

let userBasket = []

let $ = document
let shopItemsContainer = $.querySelector('.shop-items')
let bastekProductsContainer = $.querySelector('.cart-items')
let removeAllProductsBtn = $.querySelector('#removeAllProductsBtn')

allProducts.forEach(function (product) {
    let productContainer = $.createElement('div')
    productContainer.classList.add('shop-item')
    let productTitleSpan = $.createElement('span')
    productTitleSpan.classList.add('shop-item-title')
    productTitleSpan.innerHTML = product.title

    let productImageElem = $.createElement('img')
    productImageElem.classList.add('shop-item-image')
    productImageElem.setAttribute('src', product.img)

    let productDetailsContainer = $.createElement('div')
    productDetailsContainer.classList.add('shop-item-details')

    let productPriceSpan = $.createElement('span')
    productPriceSpan.classList.add('shop-item-details')
    productPriceSpan.innerHTML = product.price;

    let prodcutAddButton = $.createElement('button')
    prodcutAddButton.className = 'btn btn-primary shop-item-button'
    prodcutAddButton.innerHTML = 'ADD TO CART'
    prodcutAddButton.addEventListener('click',function () {
        addProductToBasketArray(product.id)
    })

    productContainer.append(productTitleSpan,productImageElem,productDetailsContainer)
    productDetailsContainer.append(productPriceSpan , prodcutAddButton)
    shopItemsContainer.append(productContainer)
})


function addProductToBasketArray(productId) {
   let mainProduct = allProducts.find(function(product){
    return product.id === productId 
   })
   userBasket.push(mainProduct)

   basketProductsGenerator(userBasket)

   console.log(userBasket)
}

function basketProductsGenerator(userBasketArray) {

    userBasketArray.forEach(function (product) {
        let basketProductContainer = $.createElement('div')
        basketProductContainer.classList.add('cart-row')

        let basketProductDetailsContainer = $.createElement('div')
        basketProductDetailsContainer.className = 'cart-item cart-column'

        let basketProductImg = $.createElement('img')
        basketProductImg.classList.add('cart-item-image')
        basketProductImg.setAttribute('src',product.img)
        basketProductImg.setAttribute('width', '100')
        basketProductImg.setAttribute('height', '100')

        let basketProductTitleSpan = $.createElement('span')
        basketProductTitleSpan.classList.add('cart-item-title')
        basketProductTitleSpan.innerHTML = product.title

        let basketProductPriceSpan = $.createElement('span')
        basketProductPriceSpan.className = 'cart-price cart-column'
        basketProductPriceSpan.innerHTML = '$' + product.price

        let basketProductInputsContainer = $.createElement('div')
        basketProductInputsContainer.className = ('cart-quantity cart-column')

        let basketProductInput = $.createElement('input')
        basketProductInput.value = '1'
        basketProductInput.classList.add('cart-quantity-input')
        basketProductInput.setAttribute('type','number')

        let basketProductRemoveBtn = $.createElement('button')
        basketProductRemoveBtn.className = 'btn btn-danger'
        basketProductRemoveBtn.innerHTML = 'Remove'
        basketProductRemoveBtn.addEventListener('click' ,function () {
            removeProductFromBasket(product.id)
        })
        
        basketProductDetailsContainer.append(basketProductImg,basketProductTitleSpan)

        basketProductContainer.append(basketProductDetailsContainer ,basketProductPriceSpan,basketProductInputsContainer )
        basketProductInputsContainer.append(basketProductInput,basketProductRemoveBtn)
        bastekProductsContainer.append(basketProductContainer)
    })
    
}

function removeProductFromBasket(productId) {
    userBasket = userBasket.filter(function (product) {
        console.log(product.id)
        return product.id !== productId
    })
    basketProductsGenerator(userBasket)
}
removeAllProductsBtn.addEventListener('click',function () {
    userBasket = []
    basketProductsGenerator(userBasket)
})