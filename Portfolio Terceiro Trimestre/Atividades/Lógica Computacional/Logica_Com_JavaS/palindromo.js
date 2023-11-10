function verificarPalindromo(palavra) {
    palavra = palavra.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reverse = palavra.split('').reverse().join('');
    return palavra === reverse;
}
console.log(verificarPalindromo("anilina"));