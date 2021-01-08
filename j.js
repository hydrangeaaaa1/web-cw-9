let products = [
    {name: 'Creme Brulee Cookie', price: 0.5 },
    {name: 'White Choco Orea Cookie', price: 0.75},
    {name: 'Mixed Dates Cookie', price:0.3 }
];
let cart =[];

function clearCart(){
 cart =[];
}



function addproduct(index){
let product = products[index];
let quantity = document.getElementById(index).value;
product.quantity = quantity;
cart.push(product);
console.log(cart);

let sum = 0;

document.getElementById("cart").innerText = ``;

for (let index = 0; index < cart.length; index++) {
    const element = cart[index];
    let price = element.price * element.quantity;
    sum = sum + price;

    let list =document.getElementById("cart");
    list.innerHTML+= `<li> ${element.quantity}  ${element.name}  ${element.price} KD<li>`;
}


document.getElementById("total").innerText = `${sum}KD`;
}

