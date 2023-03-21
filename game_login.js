// Defina a função onclick addUser().
function addUser() {
// Obtenha os valores de entrada das caixas de entrada de player1 e player2 e armazene esses valores dentro das variáveis.

player1Name = document.getElementById("player1NameInput").value;
player2Name = document.getElementById("player2NameInput").value;

// Então, estamos armazenando o valor das variáveis player1Name e player2Name com a respectiva chave no armazenamento local usando a função setItem()

localStorage.setItem("player1Name", player1Name);
localStorage.setItem("player2Name", player2Name);


// agora, redirecionando para game_page.html .
window.location = "game_page.html";
}