
// /*let numero = prompt("Ingrese su numero")

// if (numero > 1000) {
//     alert("hola")
// }*/
// /*let contador_total = 0;
// for (let i = 1; i < 11; i++) {
//     if (i === 1) {
//         document.write("Tengo "+ i + "oveja" + "<br>");
//     }
//     else{
//         document.write("Tengo "+ i + "ovejas" + "<br>");
//     }
// contador_total = contador_total + i ;

// }*/
// document.addEventListener("DOMContentLoaded", () => {
//     let cant_articulos = parseInt(prompt("Ingrese cantidad de productos que vaya a comprar"));
  
//     if (isNaN(cant_articulos)) {
//       alert("No ingresaste un número");
//     } else if (cant_articulos <= 0) {
//       alert("Debes ingresar un número mayor a 0");
//     } else {
//       let total_compra = 0;
//       let lista_articulos = "";
  
//       for (let i = 0; i < cant_articulos; i++) {
//         let articulo = parseInt(prompt("Ingrese el número del producto que va a llevar"));
  
//         switch (articulo) {
//           case 1:
//             lista_articulos += "Carpa 100x80 - $30890" + "<br>";
//             total_compra += 30890;
//             break;
//           case 2:
//             lista_articulos += "Carpa 120x100 - $44600" + "<br>";
//             total_compra += 44600;
//             break;
//           case 3:
//             lista_articulos += "Carpa 150x120 - $53100" + "<br>";
//             total_compra += 53100;
//             break;
//           case 4:
//             lista_articulos += "Iluminación de 2 faros - $10178" + "<br>";
//             total_compra += 10178;
//             break;
//           case 5:
//             lista_articulos += "Iluminación de 4 faros - $15999" + "<br>";
//             total_compra += 15999;
//             break;
//           case 6:
//             lista_articulos += "Iluminación de 8 faros - $25480" + "<br>";
//             total_compra += 25480;
//             break;
//           case 7:
//             lista_articulos += "Ventilador graft - $8300" + "<br>";
//             total_compra += 8300;
//             break;
//           case 8:
//             lista_articulos += "Ventilador igly - $15550" + "<br>";
//             total_compra += 15550;
//             break;
//           case 9:
//             lista_articulos += "Ventilador CE - $21430" + "<br>";
//             total_compra += 21430;
//             break;
//           case 10:
//             lista_articulos += "Timer JA - $10406" + "<br>";
//             total_compra += 10406;
//             break;
//           case 11:
//             lista_articulos += "Timer Robli - $12300" + "<br>";
//             total_compra += 12300;
//             break;
//           case 12:
//             lista_articulos += "Timer Sica - $15398" + "<br>";
//             total_compra += 15398;
//             break;
//           default:
//             alert("Artículo no encontrado");
//             break;
//         }
//       }
  
//       document.write("Lista de artículos comprados: <br>" + lista_articulos + "<br>");
//       document.write("El total de la compra es: $" + total_compra);
//     }
//   });
