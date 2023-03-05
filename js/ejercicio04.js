/*

4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con
“cancelar” deberá indicarse la suma total de los números introducidos.

*/

let confirmacion = true;
let numero;
let suma = 0;

while (confirmacion !== false) {
    numero = parseInt(prompt("Ingrese números"));

    if (isNaN(numero)) {
        alert("Porfavor ingrese números");
        numero = parseInt(prompt("Ingrese números"));
    } else {

    }

    confirmacion = confirm("Desea continuar");
    suma = suma + numero;
}

document.write(suma);