let texto = prompt("Ingrese texto");
let contador = 0;

for (let i = 0; i < texto.length; i++) {
    
    if (texto.charAt(i) == "a" || texto.charAt(i) == "e" || texto.charAt(i) == "i" || texto.charAt(i) == "o" || texto.charAt(i) == "u") {
        contador++;
    }
}

document.write(`El texto ingresado contiene ${contador} vocales.`);