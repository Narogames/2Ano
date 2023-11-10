function fibosequencia(numero) {
    const sequencia = [0, 1]
    for (let i = 2; i < numero; i++) {
        const proxnumero = sequencia[i - 1] + sequencia[i - 2]
        sequencia.push(proxnumero)
    }
    return sequencia.join(', ')
}
const numero = 12
const result = fibosequencia(numero)
console.log(result)