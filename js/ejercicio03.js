/*

3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
guión -.
Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

*/

let cadena = "";

do {
    
    let texto = prompt("Ingrese texto");
    
    if (texto == "") {
        alert("El campo esta vacio. Ingrese como minimo un caracter");
    } else {
        console.log(texto);
        cadena += texto + "-";
    }

} while (confirm("¿Desea continuar?") == true);

document.write("<p>" + cadena + "</p>");