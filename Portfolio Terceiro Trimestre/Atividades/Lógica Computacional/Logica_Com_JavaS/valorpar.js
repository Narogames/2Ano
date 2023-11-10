function encontrarPares(array) {
    const numerosPares = array.filter(numero => numero % 2 === 0)
    return numerosPares
}
const arrayEntrada = [1, 2, 3, 4, 5, 6, 7, 8]
const resultado = encontrarPares(arrayEntrada)
console.log(resultado)