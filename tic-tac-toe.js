let boxes = document.querySelectorAll(".box");
let message = document.getElementById("msg");
let turnO = true;
let gameActive = true;

const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.textContent !== "" || !gameActive) return;

    box.textContent = turnO ? "O" : "X";
    box.disabled = true;
    checkWinner();
    turnO = !turnO;
  });
});

function checkWinner() {
  for (let pattern of winningPattern) {
    let [a, b, c] = pattern;
    let val1 = boxes[a].textContent;
    let val2 = boxes[b].textContent;
    let val3 = boxes[c].textContent;

    if (val1 !== "" && val1 === val2 && val2 === val3) {
      showWinner(val1);
      return;
    }
  }

  let isDraw = [...boxes].every(box => box.textContent !== "");
  if (isDraw) {
    message.innerText = "It's a Draw!";
    gameActive = false;
  }
}

function showWinner(winner) {
  message.innerText = `Congrats Winner ${winner} !`;
  gameActive = false;
}

function newgame() {
  boxes.forEach(box => {
    box.textContent = "";
    box.disabled = false;
  });
  message.innerText = "";
  turnO = true;
  gameActive = true;
}

function resetgame() {
  newgame();
}
