let texto = prompt("Ingrese texto").toLowerCase();

for (let i = 0; i < texto.length; i++) {

    if (texto.charAt(i) == "a" || texto.charAt(i) == "e" || texto.charAt(i) == "i" || texto.charAt(i) == "o" || texto.charAt(i) == "u") {
        document.write(`La vocal ${texto.charAt(i)} está en la posición ${i}`);
        i = texto.length;
    }   

}