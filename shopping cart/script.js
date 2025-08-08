const productName = document.getElementById('product-name')
const productPrice = document.getElementById('product-price')
const addProduct = document.getElementById('add-product-btn')
const productList =document.getElementById('product-list')
const lists = document.getElementsByClassName('list')
let count = 0

addProduct.addEventListener('click',()=>{
    if(productName.value === "" || productPrice.value === ""){
        alert("please enter values for product name or product price")
        productName.value = ""
        productPrice.value = ""
    }else{
    const li= document.createElement('li')
    const name = document.createElement('span')
    const price = document.createElement('span')
    const addbtn = document.createElement('button')
    name.classList.add('name')
    price.classList.add('price')
    addbtn.classList.add('add-btn')
    name.innerText = productName.value
    price.innerText = productPrice.value
    addbtn.innerText = 'Add to Cart'
    li.append(name,price,addbtn)
    productList.appendChild(li)
    productName.value = ""
    productPrice.value = ""
    }
})
const cartList = document.getElementById('cart-list')
 const itemCount = document.getElementById('item-count')
productList.addEventListener('click',(e)=>{
if(e.target.classList.contains('name') || e.target.classList.contains('price') || e.target.classList.contains('add-btn') ){
    const clicked = e.target.parentElement
   const first =clicked.firstElementChild
   const next = first.nextElementSibling
    const li= document.createElement('li')
    const addbtn = document.createElement('button')
    addbtn.classList.add('remove-btn')
    addbtn.innerText = 'X'
    const fcopy = first.cloneNode(true)
    const ncopy = next.cloneNode(true)
    const acopy = addbtn.cloneNode(true)
    li.append(fcopy,ncopy,acopy)
    const copy = li.cloneNode(true)
   cartList.append(li)
   count++
   itemCount.innerText = count
}
})
cartList.addEventListener('click',(e)=>{
if(e.target.classList.contains('remove-btn') ){
    const clicked = e.target.parentElement
   cartList.removeChild(clicked)
   count--
   itemCount.innerText = count
}
})


