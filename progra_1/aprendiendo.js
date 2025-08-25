
//con return
function mi_primer_algoritmo(){
    var mensaje="HOLA MUNDO";
    alert(mensaje);
}

function sumaPrimos(limite) {
    let suma = 0;
    for (let num = 2; num <= limite; num++) {
        if (esPrimo(num)) {
            suma += num;
        }
    }
    return suma;
}

function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Ejemplo de uso:
console.log("Suma de primos hasta 100:", sumaPrimos(100));
