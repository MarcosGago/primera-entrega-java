function saludo(){
    let html = "";

    html = html +`
    <div>
        <h1>hola bienvenido a la tienda</h1>
    </div>
    `;
    document.getElementById("titulo").innerHTML = html;
    /*alert("hola bienvenido a la tienda");*/
}



const productos = [
    {id:1, ropa: "remera", precio: 1000, talle: `m`},

    {id:2, ropa:"pantalon", precio: 1400, talle: "s"},
    
    {id:3, ropa:"buzo", precio: 1200, talle: "xl"},
    
    {id:4, ropa:"calza", precio: 1500, talle: "m"},
];

let car = [];
/*eventos -----------------------------------------------------*/
function renderproductos() {
    let html = "";
    for(let i = 0; i< productos.length; i++){
        html = html + `
        <div onclick="addtocar(${productos[i].id});" style="border: 1px solid green;margin: 10px;">
        <p>id: ${productos[i].id}</p>
        <p>ropa: ${productos[i].ropa}</p>
        <p>precio: $ ${productos[i].precio}</p>
        <p>talle: ${productos[i].talle}</p> 
        </div>`

    }
    document.getElementById("div-productos").innerHTML = html;
}


function rendercar() {
    let html = '';
    for(let i = 0; i<car.length; i++){
        html = html +
         `
        <div style="border: 1px solid;">
        <p>id: ${car[i].id}</p>
        <p>ropa: ${car[i].ropa}</p>
        <p>precio: $ ${car[i].precio}</p>
        <p>talle: ${car[i].talle}</p> 
        <span style="cursor:pointer;" onclick="removeFromcar(${i});">🛒</span>
        </div>
        `;

    }
    document.getElementById("div-car").innerHTML = html;
}

function addtocar(id){
    const foundProductos = productos.find((item)=> item.id == id);
    car.push(foundProductos);
    rendercar();
}

function removeFromCar(id){
    
    car.splice(id, 1);
    rendercar();

  }
saludo();
renderproductos();


