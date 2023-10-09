function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}

// Ejemplo de uso
const numeroEjemplo = 7;
console.log(esParOImpar(numeroEjemplo));
