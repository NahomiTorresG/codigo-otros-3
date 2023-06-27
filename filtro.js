// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

//Se cambia el getElementsByName por getelementsById
const li = document.getElementById("lista-de-productos")
const $i = document.querySelector('.input'); //input no es clase ni id, se agrega la clase input al html porque si en un futuro se tienen más inputs, se puede arruinar el código

for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d);
}//agregamos los ; donde hacen falta

//displayProductos(productos)  Comentamos esta funcion ya que no hace nada por el momento

//boton de filtro
const botonDeFiltro = document.querySelector("button");

//funcion que hace que con el click se active
botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  //este console log es del texto que se escribe en el input
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );


  //Este for está creando un div
  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}


//Filtro para mostrar en pantalla lo solicitado en el input/Funcion tipo flecha
const filtrado = (productos = [], texto) => {
  //retorna los productos del tipo o color que escriba en la descripcion
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  