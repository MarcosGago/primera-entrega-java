let cart = JSON.parse(localStorage.getItem("productoscarrito")) || [];

function renderCart() {

  let cartRopa = [...cart]


  let html = '';
  for (let i = 0; i < cart.length; i++) {
    html =
      html +
      `
    <div style="border: 1px solid green;margin: 10px;">
    <p>id: ${productos[i].id}</p>
    <p>ropa: ${productos[i].ropa}</p>
    <p>precio: ${productos[i].precio}</p>
    <p>talle: ${productos[i].talle}</p>
    <p>
      <img  src="${productos[i].img}" />
    </p>
    <span style="cursor:pointer;" onclick="removeFromCart(${i});">🛒</span>
    </div>
    `;
  }
  document.getElementById('div-cart').innerHTML = html;
}
renderCart();


let savetolocalstorage =() =>{

  let storageJSON = JSON.stringify(cart);
  localStorage.setItem("productoscarrito", storageJSON);

}



let productos = [
  {id:1, ropa: "remera", precio: 1000, talle: `m`, img: `https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw14ee3e74/products/AD_GL7502/AD_GL7502-1.JPG`},

    {id:2, ropa:"pantalon", precio: 1400, talle: "s"},
    
    {id:3, ropa:"buzo", precio: 1200, talle: "xl"},
    
    {id:4, ropa:"calza", precio: 1500, talle: "m"},
];


let promo = ({ropa,  talle}) =>{
  console.log(`ultima unidad de "${ropa}", talle:  ${talle} 20% de descuento`)
}
promo(productos[3]);




function renderproductos() {
  let html = '';
  for (let i = 0; i < productos.length; i++) {
    html =
      html +
      `
    <div onclick="addToCart(${productos[i].id});" style="border: 1px solid green;margin: 10px;">
      <p>id: ${productos[i].id}</p>
      <p>ropa: ${productos[i].ropa}</p>
      <p>precio: ${productos[i].precio}</p>
      <p>talle: ${productos[i].talle}</p>
      <p>
        <img style="width:200px;height:200px;" src="${productos[i].img}" />
      </p>
      </div>
    `;

    document.getElementById('div-productos').innerHTML = html;
  }
  
}

renderproductos();



function addToCart(id) {
  const foundProduct = productos.find((item) => item.id == id);
  cart.push(foundProduct);
  renderCart();
  savetolocalstorage();
}

function removeFromCart(id) {
  cart.splice(id, 1);
  renderCart();
  savetolocalstorage();
}

renderproductos();
