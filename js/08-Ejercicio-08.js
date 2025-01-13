/*
8- Crea script para generar pirámide siguiente con los números del 1 al número
que indique el usuario (no mayor de 50)
1
12
123
1234
12345
123456
……

*/

let filas = parseInt(prompt("Ingrese un número del 1 al 50"));

if (isNaN(filas)) {
    document.write("El número ingresado no es válido");
} else if (filas < 1 || filas > 50) {
    document.write("El número debe estar entre 1 y 50. Ingrese un número nuevamente");
} else {
    for (let i = 1; i <= filas ; i++) {   
        for (let j = 1; j <= i ; j++) {
            document.write(j);
        }
        document.write("<br>");
    }
}