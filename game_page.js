// escrever um código para buscar os nomes do armazenamento local e armazená-lo em uma variável.
player1Name = localStorage.getItem("player1Name");
player2Name = localStorage.getItem("player2Name");

// a defina 2 variáveis para armazenar a pontuação do jogador 1 e do jogador 2. Defina seus valores como 0.
player1Score = 0;
player2Score = 0;

// atualize o nome do player1 e 2 nos respectivos elementos HTML usando seu id.
document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

// atualize a pontuação do player1 e 2 nos elementos HTML usando o id “player1_score”.
document.getElementById("player1Score").innerHTML = player1Score ;
document.getElementById("player2Score").innerHTML = player2Score ;

// atualizar o elemento HTML usando o id que criamos na aula anterior, com o nome do jogador que é a vez de fazer a pergunta, que é player1.

document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
// atualizar o elemento HTML usando o id que criamos na aula anterior, com o nome do jogador que é a vez de responder à questão, que é jogador2.
document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;


// Defina a função send().
function send() {
// Pegaremos a palavra da caixa de entrada usando o id da caixa de entrada e a armazenaremos dentro de uma variável.
getWord = document.getElementById("word").value;
// O Javascript diferencia maiúsculas de minúsculas, portanto, vamos converter a palavra em minúsculas para evitar esses erros e armazená-la em outra variável.
word = getWord.toLowerCase();
// imprimir essa palavra no console para ver se funciona.
console.log("palavra em caixa baixa = " + word);

		// A lógica para obter a primeira letra:
// pegaremos a letra da palavra e a armazenaremos dentro de uma variável.
charAt1 = word.charAt(1);
// imprimir no console usando console.log, para ver se estamos no caminho certo:
console.log(charAt1);


		// A lógica para obter a segunda letra:
// Vamos dividir o comprimento da palavra por 2, armazená-la em uma variável e depois passá-la para charAt() , isso é feito para que possamos obter a letra do meio da palavra.
// Math.floor (number): É uma função JavaScript que arredonda um número para o inteiro mais
lenghtDivide2 = Math.floor(word.length/2);
// Então, estamos passando o valor lengthDivide2 para charAt():
charAt2 = word.charAt(lenghtDivide2);
console.log(charAt2);


		// A lógica para obter a terceira letra:
// Vamos diminuir 1 do comprimento da palavra, e armazenar em uma variável e, em seguida, passar para charAt(). Isso é feito para que possamos obter a última letra da palavra.		
lenghtMinus1 = word.length - 1; 
// Então estamos passando lengthMinus1 para charAt ().
charAt3 = word.charAt(lenghtMinus1); 
console.log(charAt3);


		// Lógica para remover a primeira letra:
// passar a variável charAt1 para a função de substituição;
removeCharAt1 = word.replace(charAt1, "_");

		// Lógica para remover a segunda letra:
// passar a variável charAt2 para a função de substituição;
removeCharAt2 = removeCharAt1.replace(charAt2, "_");

		// Lógica para remover a terceira letra:
// passar a variável charAt3 para a função de substituição;		
removeCharAt3 = removeCharAt2.replace(charAt3, "_");
console.log(removeCharAt3);


			// escrever o código para adicionar esta palavra, caixa de entrada e o botão Checar ao div que criamos em game_page.html com a saída de id.

// criar uma tag h4 com um id e armazenar a palavra dentro dessa tag, e colocar tudo isso dentro de uma variável;					
questionWord = "<h4 id='wordDisplay'> P. "+removeCharAt3+"</h4>";
// crie uma tag br, “Resposta:” e uma caixa de entrada com um id, e coloque tudo isso dentro de uma variável;
input_box = "<br>Resposta : <input type='text' id='inputCheckBox'>";
// adicione 2 tags br, um botão com a classe bootstrap 'btn btn-info' e uma função onclickheck(), e coloque tudo isso dentro de uma variável que definiremos na próxima aula.
checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
// Agora coloque toda essa variável que contém a palavra, a caixa de entrada e o botão Checar dentro de uma única variável;
row =  questionWord + input_box + checkButton ; 
// atualize o div que tem a saída id com a variável de linha
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}


questionTurn = "player1";
answerTurn = "player2";



// Primeiro, definimos a função
function check()
{
// Em seguida, obteremos a palavra a partir da caixa de inserção da resposta com a id da input box (caixa de inserção), e a armazenaremos dentro de uma variável.
getAnswer = document.getElementById("inputCheckBox").value;
// converter lowerCase, e armazenaremos em outra variável.
answer = getAnswer.toLowerCase();
// passar essa palavra no console para verificarmos se está funcionando.
console.log("resposta em caixa baixa - " + answer);

			// utilizamos a declaração if para comparar a palavra da pergunta com a da resposta, caso a da resposta combine com a da pergunta, então, aumentamos a pontuação do jogador que está respondendo.
if(answer==world){
	if(answerTurn=="player1")
	{
		player1Score=player1Score+1;
		document.getElementByid("player1Score").innerHTML=player1Score;
	}
	else{
	player2Score=player2Score+1;
		document.getElementByid("player2Score").innerHTML=player2Score;
	}
}


	if(questionTurn=="player1")
	{
		questionTurn="player2"
		document.getElementByid("playerQuestion").innerHTML="Turno de Pergunta:"+player2Name;
	}
	else{
	questionTurn="player1"
		document.getElementByid("playerQuestion").innerHTML="Turno  de Pergunta:"+player1Name;
	}


	if(answerTurn=="player1")
	{
		answerTurn="player2"
		document.getElementByid("playerAnswer").innerHTML="Turno de Resposta:"+player2Name;
	}
	else{
	questionTurn="player1"
		document.getElementByid("playerAnswer").innerHTML="Turno  de Resposta:"+player1Name;
	}


	document.getElementByid("output").innerHTML="";

	// dentro do bloco if, a seguir, aumentamos a pontuação para player1,se player1 tiver respondido, senão, aumentamos a pontuação para o player2.
	
		// dentro desse bloco if incrementamos a pontuação do player1 em 1.

		// atualize o elemento HTML utilizado para conter a pontuação do player1 com a variável “player1Score”.
	
	// E, se o valor de answerTurn não for player1, significa que o valor de answerTurn é player2, e entrará no bloco else:
	
		// Dentro desse bloco else incrementamos a pontuação de player2 em 1.
	
		// Em seguida, atualizamos o elemento HTML utilizado para conter a pontuação do player2 com a variável “player2Score"


			// Agora, escreveremos o código para alterar o turno de pergunta. 
// O valor da variável questionTurn será ou player1 ou player2


	// atualize o elemento HTML que contém a label do turno de pergunta com o nome do player2.


// E, se o valor de questionTurn não for player1, será inserido no bloco else

	// portanto, precisamos alterar o turno de pergunta para player1 ajustando o valor da variável questionTurn para player1

	// atualizamos o elemento HTML que contém a label do turno de pergunta com o nome do player1



			// escreva o código para alterar o turno de resposta.
// A variável answerTurn terá ou player1 ou player2 como seus valores, portanto, verificamos se o valor da variável answerTurn é player1, se sim, isso significa que player1 respondeu a pergunta, então, trocamos o turno de resposta para player2 ao ajustarmos o valor da variável answerTurn para player2.

	// atualize o elemento HTML que contém a label do turno de resposta com o nome do player2.


// E, se o valor de answerTurn não for player1, será inserido no bloco else, ou seja, player2 respondeu a pergunta, portanto, precisamos trocar o turno de resposta para player1 ao ajustarmos o valor da variável answerTurn para player1.


	// atualize o elemento HTML que contém a label do turno de resposta com o nome do player1.
	

// Quando o botão Checar for pressionado, a seção em que a palavra pergunta está, a input box e o botão Checar, que estão presentes, serão removidos
// Utilizamos id=”output”, pois, a id é definida com um elemento HTML div, em game_page.html, para conter a palavra pergunta, a input box e o botão Checar.


}
// 
