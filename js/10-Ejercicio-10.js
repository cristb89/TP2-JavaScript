/*
10- Realiza un script que pida número de filas y columnas y escriba una tabla.
Dentro de cada una de las celdas deberá escribirse un número consecutivo en
orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
Ejercicios con Math
*/

let nfil = parseInt(prompt("Ingrese una cantidad de filas"));

if (isNaN(nfil)) {
    alert("Debe ingresar un número de filas valido");
} else if (nfil < 1){
    alert("Debe ingresar un número de filas mayor que cero");
} else {
    let ncol = parseInt(prompt("Ingrese una cantidad de columnas"));
    if (isNaN(ncol)) {
        alert("Debe ingresar un número de columnas valido");
    } else if (ncol < 1){
        alert("Debe ingresar un número de columnas mayor que cero");
    } else {

        let rango = nfil * ncol;

        document.write(`<table><tbody>`);

        for (let i = 1; i <= nfil; i++) {
            document.write(`<tr>`)
            
            for (let j = 0; j < ncol; j++) {
                document.write(`<td>${rango--}</td>`)
            }

            document.write(`</tr>`);
        }

        document.write(`</tbody></table>`);
    }
}