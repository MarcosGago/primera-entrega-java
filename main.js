let sum = 0;
alert("hola bienvenido a la tienda");
//Declaramos variables siempre arriba y el alert no hace falta que este en una funcion

function tienda() {
  let seleccionpren = prompt(`${bucleropa}  0) Salir`);

  while (seleccionpren !== "0") {
    //Mejor usar el "!== para validar!"
    if (seleccionpren == ropas[0].id) {
      sum += parseInt(`${ropas[0].precio}`);
      alert(`elegiste: ${ropas[0].tipo}, ${ropas[0].talle}. carrito: $${sum}`);
    } else if (seleccionpren == ropas[1].id) {
      alert(`${ropas[1].tipo}, ${ropas[1].talle}. carrito: $${sum}`);
      sum += parseInt(`${ropas[1].precio}`);
    } else if (seleccionpren == ropas[2].id) {
      sum += parseInt(`${ropas[2].precio}`);
      alert(`prenda: ${ropas[2].tipo}, ${ropas[2].talle}. carrito: $${sum}`);
    } else if (seleccionpren == ropas[3].id) {
      sum += parseInt(`${ropas[3].precio}`);
      alert(`${ropas[3].tipo}, ${ropas[3].talle}. carrito: $${sum}`);
    } else {
      alert(`no seleccionaste ninguna prenda`);
    }
    seleccionpren = prompt(`${bucleropa}  
         0) Salir  
         carrito: $${sum}`);
  }

  alert(`total carrito $${sum}.`);
}

class prendas {
  constructor(id, tipo, precio, talle) {
    this.id = id;
    this.tipo = tipo;
    this.precio = precio;
    this.talle = talle;
  }
}

let prendas1 = new prendas(1, "remera", 1000, "m");
let prendas2 = new prendas(2, "pantalon", 1400, "s");
let prendas3 = new prendas(3, "buzo", 1200, "xl");
let prendas4 = new prendas(4, "calza", 1500, "m");

const ropas = [prendas1, prendas2, prendas3, prendas4];
//Mejor asi, mas limpio

let bucleropa = ``;
for (let i = 0; i < ropas.length; i++) {
  bucleropa += `${ropas[i].id}) ${ropas[i].tipo} -$${ropas[i].precio}, ${ropas[i].talle}
    `;
} //Este buscle esta bueno, me gusta

console.log(ropas);
//filtrar por precio

let preciomenor1400 = ropas.filter((prendas) => prendas.precio <= 1400);

console.log(preciomenor1400);

saludo();
tienda();
