function multiplicacaoSemMultiplicar(numero1, numero2) {
    let resultado = 0
    let i = 0
    while ( i < numero2)  {
      resultado += numero1
      i++
    }
    return resultado
  }
  console.log(multiplicacaoSemMultiplicar(4, 5))