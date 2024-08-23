"use strict";

let field = document.getElementById("tic-tac-field");
let cells = Array.from(field.querySelectorAll(".cell"));

let turn = "X";

replay();

function clickCell(event) {
  let cell = event.target.closest(".cell");

  if (!cell || !field.contains(cell)) {
    return;
  }

  if (cell.dataset.sign == "X" || cell.dataset.sign == "O") {
    alert("Эта клетка уже занята");
    return;
  }

  cell.dataset.sign = turn;

  if (getWinner()) {
    endGame();
    return;
  }

  turn = turn == "X" ? "O" : "X";
  field.caption.textContent = `Ходят: ${turn}`;
}

function getWinner() {
  let signs = cells.map((cell) => cell.dataset.sign);
  let tripleSign = turn.repeat(3);

  let isWin =
    signs[0] + signs[1] + signs[2] == tripleSign ||
    signs[3] + signs[4] + signs[5] == tripleSign ||
    signs[6] + signs[7] + signs[8] == tripleSign ||
    signs[0] + signs[3] + signs[6] == tripleSign ||
    signs[1] + signs[4] + signs[7] == tripleSign ||
    signs[2] + signs[5] + signs[8] == tripleSign ||
    signs[0] + signs[4] + signs[8] == tripleSign ||
    signs[2] + signs[4] + signs[6] == tripleSign;

  if (isWin) {
    if (turn == "X") {
      alert("Победили крестики!");
    } else if (turn == "O") {
      alert("Победили нолики!");
    }

    return true;
  }
  if (signs.join("").length == 9) {
    alert("Ничья!");
  }

  return false;
}

function endGame() {
  field.caption.textContent = "Игра окончена";
  field.removeEventListener("click", clickCell);
}

function replay() {
  for (let cell of cells) {
    cell.dataset.sign = "";
  }

  turn = "X";

  field.caption.textContent = `Ходят: ${turn}`;
  field.addEventListener("click", clickCell);
}
