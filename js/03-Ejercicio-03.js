let texto = prompt("Ingrese texto");

while (confirm("Desea continuar") == true) {
    texto += ` - ${(texto = prompt("Ingrese texto"))}`;
}

document.write(texto);