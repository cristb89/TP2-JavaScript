const nota = parseInt(prompt("Ingrese su nota (De 0 a 10"));

if (isNaN(nota)) {
    document.write("Introduce un número válido");
} else if ((nota < 0) || (nota > 10)) {
    document.write("Número erroneo");
} else {
    switch (nota) {
        case 0:
        case 1:
        case 2:
            document.write("Muy Deficiente");
            break;
        case 3:
        case 4:
            document.write("Insuficiente");
            break;
        case 5:
        case 6:
            document.write("Suficiente");
            break;
        case 7:
            document.write("Bien");
            break;
        case 8:
        case 9:
            document.write("Notable");
            break;
        case 10:
            document.write("Sobresaliente");
            break;
        default:
            break;
    }
}