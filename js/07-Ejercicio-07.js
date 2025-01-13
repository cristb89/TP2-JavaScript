/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al número
que indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que
indica 30).
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

let filas = parseInt(prompt("Ingrese un número del 1 al 50"));

if (isNaN(filas)) {
    document.write("El número ingresado no es válido");
} else if (filas < 1 || filas > 50) {
    document.write("El número debe estar entre 1 y 50. Ingrese un número nuevamente");
} else {
    for (let i = filas; i > 0 ; i--) {   
        for (let j = 0; j < i ; j++) {
            document.write(i);
        }
        document.write("<br>");
    }
}