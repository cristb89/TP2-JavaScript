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

let repeticiones = parseInt(prompt("Ingrese un número del 1 al 50"));

if (isNaN(repeticiones)) {
    alert("Ingrese un número valido (del 1 al 50)");
} else if (repeticiones < 0 || repeticiones > 50) {
    alert("Ingrese un número valido (del 1 al 50)");
} else {
    for (l = repeticiones; l > 0; l--) {
        for (r = 0; r < l; r++) {
            document.write(l);
        }
        document.write("<br>");
    }
}