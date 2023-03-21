// // Primeiro, definiremos a variável score com valor = 0;

score = 0;
// Então vamos escrever a função updateScore.
// Em seguida, atualize o elemento HTML que tem seu id como "score", com o texto “Pontuação: =
// score + 1 (esta é a variável).
function updateScore()
{
	score = score + 1;
	document.getElementById("score").innerHTML = "Pontuação : " + score;
}

// vamos escrever a função saveScore.
function saveScore()
{
    localStorage.setItem("score", score);
}

// vamos escrever a função nextPage:
function nextPage() {
    window.location = "activity_2.html";
    }
    





