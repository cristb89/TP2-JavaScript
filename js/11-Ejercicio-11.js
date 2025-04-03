let persona1 = prompt("Ingrese un nombre");
let edad1 = parseInt(prompt("Ingrese su edad"));
let persona2 = prompt("Ingrese otro nombre");
let edad2 = parseInt(prompt("Ingrese su edad"));
let persona3 = prompt("Ingrese un nombre más");
let edad3 = parseInt(prompt("Ingrese su edad"));

let personamayor = Math.max(edad1,edad2,edad3);

if (personamayor == edad1) {
    alert(`${persona1} es el mayor`);
} else if (personamayor == edad2) {
    alert(`${persona2} es el mayor`);
} else {
    alert(`${persona3} es el mayor`);
}