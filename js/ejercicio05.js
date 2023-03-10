/*

5- Realizar una página con un script que calcule el valor de la letra de un número
de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R,
W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
Si lo introducido no es un número deberá indicarse con un alert y volver a
preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

*/

let dni;
let resto;
let continuar = true;

while (continuar !== false) {
    
    dni = parseInt(prompt("Ingrese su número de DNI"));
    
    if (isNaN(dni)) {
        alert("Ingrese un número de DNI valido");
    } else if ((dni <= 0) || (dni >= 99999999)) {
        alert("Ingrese un número de DNI valido");
    } else {
        resto = dni % 23;

        switch (resto) {
            case 0:
                document.write("<p>DNI: " + dni + "</p><p>Letra: T</p><hr>");
                break;
            case 1:
                document.write("<p>DNI: " + dni + "</p><p>Letra: R</p><hr>");
                break;
            case 2:
                document.write("<p>DNI: " + dni + "</p><p>Letra: W</p><hr>");
                break;
            case 3:
                document.write("<p>DNI: " + dni + "</p><p>Letra: A</p><hr>");
                break;
            case 4:
                document.write("<p>DNI: " + dni + "</p><p>Letra: G</p><hr>");
                break;
            case 5:
                document.write("<p>DNI: " + dni + "</p><p>Letra: M</p><hr>");
                break;
            case 6:
                document.write("<p>DNI: " + dni + "</p><p>Letra: Y</p><hr>");
                break;
            case 7:
                document.write("<p>DNI: " + dni + "</p><p>Letra: F</p><hr>");
                break;
            case 8:
                document.write("<p>DNI: " + dni + "</p><p>Letra: P</p><hr>");
                break;
            case 9:
                document.write("<p>DNI: " + dni + "</p><p>Letra: D</p><hr>");
                break;
            case 10:
                document.write("<p>DNI: " + dni + "</p><p>Letra: X</p><hr>");
                break;
            case 11:
                document.write("<p>DNI: " + dni + "</p><p>Letra: B</p><hr>");
                break;
            case 12:
                document.write("<p>DNI: " + dni + "</p><p>Letra: N</p><hr>");
                break;
            case 13:
                document.write("<p>DNI: " + dni + "</p><p>Letra: J</p><hr>");
                break;
            case 14:
                document.write("<p>DNI: " + dni + "</p><p>Letra: Z</p><hr>");
                break;
            case 15:
                document.write("<p>DNI: " + dni + "</p><p>Letra: S</p><hr>");
                break;
            case 16:
                document.write("<p>DNI: " + dni + "</p><p>Letra: Q</p><hr>");
                break;
            case 17:
                document.write("<p>DNI: " + dni + "</p><p>Letra: V</p><hr>");
                break;
            case 18:
                document.write("<p>DNI: " + dni + "</p><p>Letra: H</p><hr>");
                break;
            case 19:
                document.write("<p>DNI: " + dni + "</p><p>Letra: L</p><hr>");
                break;
            case 20:
                document.write("<p>DNI: " + dni + "</p><p>Letra: C</p><hr>");
                break;
            case 21:
                document.write("<p>DNI: " + dni + "</p><p>Letra: K</p><hr>");
                break;
            case 22:
                document.write("<p>DNI: " + dni + "</p><p>Letra: E</p><hr>");
                break;
            default:
                document.write("ERROR");
                break;
        }
        continuar = confirm("DESEA CONTINUAR");
    }
}