// TABLA DE PRODUCTOS

const productos = [{ nombre: 'CREATINA', precio: 20000 },
{ nombre: 'REMERA HOMBRE', precio: 10000 },
{ nombre: 'REMERA MUJER', precio: 10000 },
{ nombre: 'PROTEINA', precio: 15000 }]

const inputSearch = document.querySelector("#inputSearch")
const tbody = document.querySelector("tbody")


const armarTabla = (prod) => {
    return `<tr>
                <td>${prod.nombre}</td>
                <td>${prod.precio}</td>
            </tr>`
}

const filtrarProductos = () => {
    let parametro = inputSearch.value.trim().toUpperCase()
    let resultado = productos.filter(prod => prod.nombre.includes(parametro))
    if (resultado.length > 0) {
        cargarProductos(resultado)
    }
}

const cargarProductos = (array) => {
    let tabla = ""
    if (array.length > 0) {
        array.forEach(prod => {
            tabla += armarTabla(prod)
        })
        tbody.innerHTML = tabla
    }
}
cargarProductos(productos)

inputSearch.addEventListener("search", filtrarProductos)

// FORMULARIO
let mailForm = document.querySelector("#email");

mailForm.addEventListener("input", function () {
    if (mailForm.value === "") {
        mailForm.innerHTML("Ingrese un mail válido");
    }
});

let formulario = document.querySelector("#formulario");

let info = document.querySelector("#info");

const alertForm = formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    info.innerHTML = `
    <div class="alert" role="alert">
    <h5> En breve le enviaremos un mail a ${mailForm.value} respondiendo sus consultas </h5></div>`;
});

// JSON LOCAL STORAGE

const toJson = JSON.stringify(productos)
localStorage.setItem("test", toJson)