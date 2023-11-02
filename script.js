const boton = document.getElementById("boton")

boton.addEventListener("click", calcularPrecio);

function calcularPrecio(){

    let cantidad = document.getElementById("cantidad").value

    let categoria = document.getElementById("categoria").value

    let total = document.getElementById("total")

    if(categoria == "estudiante"){
        total.value = "Total a Pagar $" + (cantidad*200)*0.2
    } else if (categoria == "trainee"){
        total.value = "Total a Pagar $" + (cantidad*200)*0.5
    } else if (categoria == "junior"){
        total.value = "Total a Pagar $" + (cantidad*200)*0.85
    } else {
        total.value = "Total a Pagar $" + cantidad*200
    }
}





