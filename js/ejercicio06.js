/*

6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
…….

*/

for (l = 1; l < 31; l++) {
    for (n = 0; n < l; n++) {
        document.write(l);
    }
    document.write("<br>");
}