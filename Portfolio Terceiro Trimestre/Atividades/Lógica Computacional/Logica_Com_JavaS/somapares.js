function somaNumerosPares(inicio, fim) {
    let soma = 0
    for (let i = inicio; i <= fim; i++) {
      if (i % 2 === 0) {
        soma += i
      }
    }
    return soma
  }
  const inicioIntervalo = 1
  const fimIntervalo = 10
  const resultado = somaNumerosPares(inicioIntervalo, fimIntervalo)
  console.log(`A soma dos números pares no intervalo de ${inicioIntervalo} a ${fimIntervalo} é ${resultado}`)
  