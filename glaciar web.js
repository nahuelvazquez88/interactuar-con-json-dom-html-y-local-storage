
//SECCION DE CERVEZA 
class Cerveza {
    constructor(id, nombre, valor, stock) {
      this.nombre = nombre;
      this.id = id;
      this.stock = stock;
      this.valor = valor;   
    }
    
  };
  
   const valorIva = 21;
  
  const cervezas = [];
  
  
  
  cervezas.push(new Cerveza(1,'Germany smirch red', 30, 200));
  cervezas.push(new Cerveza(2,'Belgium strong amber', 35, 150));
  cervezas.push(new Cerveza(3,'Scotland lamb gods', 40, 75));
  cervezas.push(new Cerveza(4,'Slovakian herr hangunst', 45, 100));
  
  
  console.log(cervezas); 
  
  //PEDIDO AL USUARIO 
//   alert(`Glaciar Beer menu:
//   1-Germany smirch red
//   2-Belgium strong amber
//   3-Scotland lamb gods
//   4-Slovakian herr hangunst ` )  
//   let cervezaPedida = prompt(`Glaciar Beer menu:
//   1-Germany smirch red
//   2-Belgium strong amber
//   3-Scotland lamb gods
//   4-Slovakian herr hangunst 
//   Choose the number of beer you want ` )
//   let cantidadPedida = parseInt(prompt(" How many beers? "))
//   let nombreCerveza 

//   for(let i=0;i<cervezas.length;i++){
//   console.log(cervezas[i].nombre)
//   if(cervezas[i].id == cervezaPedida ){
//   nombreCerveza = cervezas[i].nombre
//   console.log( cervezas[i].id);
//   console.log(cervezaPedida);
//   }

 
//   }
      
//   console.log(cervezaPedida)
//   console.log(cantidadPedida)
  
//   //operaciones 

//   for(let i=0;i<cervezas.length;i++){
//   console.log(cervezas[i].nombre)
//   if(cervezas[i].id == cervezaPedida ){
//   nombreCerveza = cervezas[i].nombre
//   console.log( cervezas[i].id);
//   console.log(cervezaPedida);
//     }
  
// }

// const calcularTotal =(arreglo,nombre ,cantidad)=>{
// let precio 
// let stockNuevo 
//  for(let i=0;i<arreglo.length;i++){
//         console.log(arreglo[i].nombre)
//         if(arreglo[i].nombre == nombre ){

//         stockNuevo = arreglo[i].stock -cantidad;
//         precio = arreglo[i].valor
//         console.log(stockNuevo);
//         console.log(cervezaPedida);
//   }
//           }

// return ((precio*cantidad)+(((precio*cantidad)* valorIva ) /100)); 



// }
// let total= calcularTotal(cervezas,nombreCerveza,cantidadPedida)

// alert( `Great your  ${nombreCerveza}  it s on the way, enjoy it  🍻 
// total= $${total}
// `);

//selector del DOM
let entrada = document.getElementById("entrada").value ='4';
console.log(entrada.value); 

const mensajes = [
'Bienvenido',
'Esta es la cervecería Glaciar',
'Hola, buenas tardes',
'Buenas noches'
]

let saludo = document.getElementById("mensaje");
let resultados = Math.floor(Math.random() * 4);
saludo.innerHTML = `${mensajes[resultados]}`
 
console.log(resultados)

// let menu = document.getElementById("menu");
// menu.createElement('h1')
// menu.innerHTML = ` Glaciar Beer menu:` 
 

/* <div id="menu">Glaciar Beer menu:
<ol> <li>  1-Germany smirch red</li>
 <li> 2-Belgium strong amber</li>
     <li>  3-Scotland lamb gods</li>
         <li>4-Slovakian herr hangunst </li></ol>
 Choose the number of beer you want</div>
  */

//  let menu = document.createElement('div')
// console.log(menu)
//  menu.innerHTML = "<p >Glaciar Beer menu:</p> "
// //  <ol> <li>  1-Germany smirch red</li>
// //   <li> 2-Belgium strong amber</li>
// //       <li>  3-Scotland lamb gods</li>
// //           <li>4-Slovakian herr hangunst </li></ol>
// //   Choose the number of beer you want</p>" 
//   document.body.appendChild(menu);

  


