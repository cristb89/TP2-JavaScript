let dni;

do {
    dni = parseInt(prompt("Ingrese un número de DNI. El número debe ser entre 0 y 99999999"));

    if (!isNaN(dni)) {
        if (dni < 0 || dni > 99999999) {
            alert("Ingrese un DNI valido");
        } else {
            switch (dni % 23) {
                case 0:
                    alert(`Al dni ${dni} le corresponde la letra T.`);
                    break;
                case 1:
                    alert(`Al dni ${dni} le corresponde la letra R.`);
                    break;
                case 2:
                    alert(`Al dni ${dni} le corresponde la letra W.`);
                    break;
                case 3:
                    alert(`Al dni ${dni} le corresponde la letra A.`);
                    break;
                case 4:
                    alert(`Al dni ${dni} le corresponde la letra G.`);
                    break;
                case 5:
                    alert(`Al dni ${dni} le corresponde la letra M.`);
                    break;
                case 6:
                    alert(`Al dni ${dni} le corresponde la letra Y.`);
                    break;
                case 7:
                    alert(`Al dni ${dni} le corresponde la letra F.`);
                    break;
                case 8:
                    alert(`Al dni ${dni} le corresponde la letra P.`);
                    break;
                case 9:
                    alert(`Al dni ${dni} le corresponde la letra D.`);
                    break;
                case 10:
                    alert(`Al dni ${dni} le corresponde la letra X.`);
                    break;
                case 11:
                    alert(`Al dni ${dni} le corresponde la letra B.`);
                    break;
                case 12:
                    alert(`Al dni ${dni} le corresponde la letra N.`);
                    break;
                case 13:
                    alert(`Al dni ${dni} le corresponde la letra J.`);
                    break;
                case 14:
                    alert(`Al dni ${dni} le corresponde la letra Z.`);
                    break;
                case 15:
                    alert(`Al dni ${dni} le corresponde la letra S.`);
                    break;
                case 16:
                    alert(`Al dni ${dni} le corresponde la letra Q.`);
                    break;
                case 17:
                    alert(`Al dni ${dni} le corresponde la letra W.`);
                    break;
                case 18:
                    alert(`Al dni ${dni} le corresponde la letra H.`);
                    break;
                case 19:
                    alert(`Al dni ${dni} le corresponde la letra L.`);
                    break;
                case 20:
                    alert(`Al dni ${dni} le corresponde la letra C.`);
                    break;
                case 21:
                    alert(`Al dni ${dni} le corresponde la letra K.`);
                    break;
                case 22:
                    alert(`Al dni ${dni} le corresponde la letra E.`);
                    break;
                default:
                    alert("Valor fuera del rango");
            }
        }
    } else {
        alert("Ingrese un DNI valido");
    }
    
} while (confirm("¿Desea ingresar otro DNI?"));