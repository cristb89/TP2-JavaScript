let suma = 0;
let numero;

do {
    numero = parseInt(prompt("Ingrese un número"));
    if (isNaN(numero)) {
        alert("Solo se permite ingresar números");
    }
    suma += numero;
} while (confirm("Desea continuar") == true);

document.write(suma);