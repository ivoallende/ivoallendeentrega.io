

document.addEventListener("DOMContentLoaded", () => {

let cant_articulos = parseInt(prompt("Ingrese cantidad de productos que vaya a comprar"));

if (isNaN(cant_articulos)) {

    alert("No ingresarte un numero");


} else if (cant_articulos <= 0) {


    alert("Tenes que ingresar un numero mayor a 0");
    confirm("Quiere volver a hacer la compra");

}

else if (cant_articulos === true) {
        
}


else {

    let total_compra = 0;
    let lista_articulos = "";


    for (let i = 0; i < cant_articulos; i++) {

        let articulo = parseInt(prompt("Ingrese el numero del producto va a llevar"));

        switch (articulo){
            case 1:
            lista_articulos += "Carpa 100x80 - $30890" + "<br>";
            total_compra += 30890;
            break;
        case 2:

            lista_articulos += "Carpa 120x100 - $44600" + "<br>";
            total_compra += 44600;
            break;

        case 3:
            lista_articulos += "Carpa 150x120 - $53100" + "<br>";
            total_compra += 53100;
            break;
        case 4:
            lista_articulos += "Iluminacion de 2 faros - $10178" + "<br>";
            total_compra += 10178;
            break;
        case 5:
            lista_articulos += "Iluminacion de 4 faros - $15999" + "<br>";
            total_compra += 15999;
            break;
        case 6:
            lista_articulos += "Iluminacion de 8 faros - $25480" + "<br>";
            total_compra += 25480;
            break;
        case 7:
            lista_articulos += "Ventilador graft - $8300" + "<br>";
            total_compra += 8300;
            break;
        case 8:
            lista_articulos += "Ventilador igly - $15550" + "<br>";
            total_compra += 15550;
            break;
        case 9:
            lista_articulos += "Ventilador CE - $21430" + "<br>";
            total_compra += 21430;
            break;
        case 10:
            lista_articulos += "Timer JA - $10406" + "<br>";
            total_compra += 10406;
            break;
        case 11:
            lista_articulos += "Timer Robli - $12300" + "<br>";
            total_compra += 12300;
            break;
        case 12:
            lista_articulos += "Timer Sica - $15398" + "<br>";
            total_compra += 15398;
            break;
        
        default:
            alert("articulo no encontrado");
            break;
        }

}
    

    document.write("Lista de articulos comprados : <br>" + lista_articulos + "<br>");
    document.write("El total de la compra es: $" + total_compra);

}
});










            
        






/*function solicitarArticulo (mensaje) {

    let articulo =parseFloat (prompt (mensaje));
    
    if (isNaN (articulo) ){
        alert ("no ingresaste el numero del articulo");

        return false ;
    }
    else if (articulo <= 0 ){
        alert ("Ingresa un numero que aparesca en pantalla");
    }
    return articulo;
}*/