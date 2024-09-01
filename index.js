let boxs = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;
let arrays = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
boxs.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerHTML = "O";
      turn0 = false;
    } else {
      box.innerHTML = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const resetGame = () => {
  turn0 = true;
  enableBox();
  msgContainer.classList.add("hide");
};
const disableBox = () => {
  for (let box of boxs) {
    box.disabled = true;
  }
};
const enableBox = () => {
  for (let box of boxs) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBox();
};
const checkWinner = () => {
  for (let array of arrays) {
    let posVal1 = boxs[array[0]].innerText;
    let posVal2 = boxs[array[1]].innerText;
    let posVal3 = boxs[array[2]].innerText;
    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 == posVal2 && posVal2 == posVal3) {
        showWinner(posVal1);
      }
    }
  }
};
newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
