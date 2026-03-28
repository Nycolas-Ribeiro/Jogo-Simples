const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
let score = 0;

function createSquare() {
  const square = document.createElement("div");
  square.classList.add("square");

  // posição aleatória 
  const x = Math.random() * (gameArea.clientWidth - 50);
  const y = Math.random() * (gameArea.clientHeight - 50);
  square.style.left = x + "px";
  square.style.top = y + "px";

  // clique
  square.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = "Pontuação: " + score;
    gameArea.removeChild(square);
  });

  gameArea.appendChild(square);

  // remover após 0,5 segundo se não clicar
  setTimeout(() => {
    if (gameArea.contains(square)) {
      gameArea.removeChild(square);
    }
  }, 1000);
}

// cria quadrados a cada 1 segundo
setInterval(createSquare, 1000);
