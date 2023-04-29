programa
{
	funcao inicio()
	{
		caracter operador, comeco
		
		real resultado = 0.0, operando1, operando2

/*Trabalho inspirado por projetos de calculadoras feitas, 
 passei em torno de 5 fontes para fazer esta calculadora */
		escreva("Bem vindo para a autoria do Naro \n Para começar aperte s, se não quiser aperte n \n\n")
		leia(comeco)
		limpa()
		se (comeco == 'n')
		escreva("Então nem abra o projeto!")
		senao se(comeco == 's')
		
		escreva("Digite o primeiro número: ")
		leia(operando1)

		escreva("Digite o segundo número: ")
		leia(operando2)

		escreva("\n")
		
		escreva("Agora digite qual operação utilizar ( + - * / ): ")
		leia(operador)

		
		
		se (operador == '+')
		{
			resultado = operando1 + operando2
			
		}
		senao  se(operador == '-')
		{
			resultado = operando1 - operando2
			
		}
		senao se(operador == '/')
		{
			resultado = operando1 / operando2
			
		}
		senao se(operador == '*')
		{
			resultado = operando1 * operando2
		}	

		limpa()
		
		escreva("Resultado:\n\n")
		escreva(operando1, " ", operador, " ", operando2, " = ", resultado)
		escreva(" \n\n Obrigado por optar por nosso servico")
		
		
		escreva("\n")
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 319; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */