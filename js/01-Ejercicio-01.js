const edad = parseInt(prompt("Ingrese su edad"));

if (isNaN(edad)) {
    document.write("Por favor ingrese una edad valida");
} else if (edad < 1) {
    document.write("Por favor ingrese una edad valida");
} else if (edad < 18) {
    document.write("Aún no puedes conducir");
} else {
    document.write("Ya puedes conducir");
}