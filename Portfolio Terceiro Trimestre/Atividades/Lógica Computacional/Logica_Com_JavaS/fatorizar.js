function fatorial(numero) {
    var valor = numero
    if (numero ===0 || numero ===1 ) 
    return 1;
    while (numero > 1){
        numero--
        //valor vai multiplicar o número e o seu resultado vai ser a multiplicação entre eles
        valor *= numero
    }
    return valor
}
console.log(fatorial(5))