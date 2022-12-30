// LOGIN

const pass = "1234";
const notif = document.querySelector("#notif");

function inputPW() {
    for (let i = 0; i < 3; i++) {
        if (passInp.value === pass) {
            notif.innerHTML = "Bienvenido!";
            buttonFunction()
            break;
        }
        else if (i < 3) {
            notif.innerHTML = "Contraseña incorrecta, intente otra vez";
            continue;
        }
        else {
            notif.innerHTML = "Límite de intento excedido";
            break;
        }
    }
}

let boton = document.querySelector("#enterBtn")
boton.addEventListener("click", inputPW)

function buttonFunction() {
    document.querySelector("#buttonAppear").innerHTML = `<a href="./tercerentrega3.html">Empezar</a>`;
}