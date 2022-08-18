alert("Bienvenida a la tienda");

let sum = 0;


    
    let seleccionpren = prompt("1) Remera nike $1000 talle m 2) pantalon puma $1400 talle s 3) buzo america $1200 talle xl 4) calza calor $1500 talle m 0) Salir");
    
    function tienda(){
     while (seleccionpren!== 0){
        switch (seleccionpren) {
            case "1":
                sum = parseInt(sum + 1000)
                alert(`remera nike $1000 talle m `)
                break;
            case "2":
                sum = parseInt(sum + 1400)
                alert(`pantalon $1400 talle s `)
                break;
            case "3":
                sum = parseInt(sum + 1200)
                alert(`buzo $1200 talle xl `)
                break;
            case "4":
                acumulado = parseInt(sum + 1500)
                alert(`calza $1500 talle m `)
                break;
           
            default:
                alert(`No seleccionaste ninguna prenda`)
                break;
        }
        let seleccionpren = prompt(`
    1) Remera nike $1000 talle m
    2) pantalon puma $1400 talle s
    3) buzo america $1200 talle xl
    4) calza calor $1500 talle m 
    
    0) Salir
    `);
    }
    alert(`total de la factura : $${sum}`)
}



class prendas{
    constructor(tipo,precio,talle){
        this.tipo=tipo
        this.precio=precio
        this.talle=talle
    }
}

let prendas1 = new prendas("remera",1000,"m")
let prendas2 = new prendas("pantalon",1400,"s")
let prendas3 = new prendas("buzo",1200,"xl")
let prendas4 = new prendas("calza",1500,"m")

const ropas= []

ropas.push(prendas1)
ropas.push(prendas2)
ropas.push(prendas3)
ropas.push(prendas4)

console.log(ropas)

//filtrar por precio 

let preciomenor1400 = ropas.filter(prendas =>prendas.precio <= 1400)

console.log(preciomenor1400)