function impar(numero){
    if (numero % 2 === 0)
        return( numero + " é par")
        else 
        return( numero + " é ímpar")
}
//console.log(impar(5))

function factorizar(fator) {
    if (fator < 0) 
          return -1;
    else if (fator == 0) 
        return 1;
    else {
        return (fator * factorizar(fator - 1));
    }
  }
 //console.log(factorizar(5))

 function numeroPrimo(num) {
    for (var i = 2; i < num; i++) {
      if(num % i === 0) {
         return false;
      }
    }
    return num !== 1;  
  }
  console.log( numeroPrimo(7) )

  function fibonacci(fibo){
    repeticao = 0
    adicao = 0
    var vezes = 0
     for (vezes < fibo vezes++ ){
     resultado = adicao + repeticao
     return resultado
     adicao = repeticao
     repeticao++
     }
  }
  console.log(fibonacci(3))