var turn = "O";
var win = false;
var winner = "";
var table = [];
var blocks = document.querySelectorAll(".table-block");
var d = 0;
var turnObject = document.getElementById("turn");
var game_continue = 1;
var winning_condition = 0;
var draw_condition = 0;
newGame();

for (var block of blocks) {
  // 1. Modify the code here to check click event on each block

  block.onclick = function (event) {
    // modify the condition here to continue the game play as long as there is no winner
    if (game_continue && event.target.innerHTML === "") {
      // 4. Modify the code here to check whether the clicking block is avialable.
      event.target.innerHTML = turn;

      checkResult();
    }
  };
}

function checkResult() {
  {
    j = 1;
    // 2. Modify the code here to check whether someone win the game
    for (i of blocks) {
      table[j] = i.innerHTML;
      j++;
    }
    // adasd

    if (table[1] == table[2] && table[2] == table[3] && table[1] != "") {
      alert("player " + table[1] + " Wins the game");
      reset(1, 2, 3);
      winning_condition = 1;
      winner = table[1];
    }
    if (table[4] == table[5] && table[5] == table[6] && table[4] != "") {
      alert("player " + table[4] + " Wins the game");
      reset(4, 5, 6);
      winning_condition = 1;
      winner = table[4];
    }
    if (table[7] == table[8] && table[8] == table[9] && table[7] != "") {
      alert("player " + table[7] + " Wins the game");
      reset(7, 8, 9);
      winning_condition = 1;
      winner = table[7];
    }

    //check vertical
    if (table[1] == table[4] && table[4] == table[7] && table[1] != "") {
      alert("player " + table[1] + " Wins the game");
      reset(1, 4, 7);
      winning_condition = 1;
      winner = table[1];
    }
    if (table[2] == table[5] && table[5] == table[8] && table[2] != "") {
      alert("player " + table[2] + " Wins the game");
      reset(2, 5, 8);
      winning_condition = 1;
      winner = table[2];
    }
    if (table[3] == table[6] && table[6] == table[9] && table[3] != "") {
      alert("player " + table[3] + " Wins the game");
      reset(3, 6, 9);
      winning_condition = 1;
      winner = table[3];
    }

    //check diagonal
    if (table[1] == table[5] && table[5] == table[9] && table[1] != "") {
      alert("player " + table[1] + " Wins the game");
      reset(1, 5, 9);
      winning_condition = 1;
      winner = table[1];
    }
    if (table[3] == table[5] && table[5] == table[7] && table[3] != "") {
      alert("player " + table[3] + " Wins the game");
      reset(3, 5, 7);
      winning_condition = 1;
      winner = table[3];
    }
    if (winning_condition == 0 && !table.includes("")) {
      draw_condition = 1;
    }
  }

  // asdasdads
  if (winning_condition) {
    //Game end and someone wins the game
    winner = turn;
    turnObject.innerHTML = "Game win by " + winner;
    game_continue = 0;
  } else if (draw_condition) {
    // Game end and no-one wins the game
    turnObject.innerHTML = "Game draw";
    game_continue = 0;
  } else {
    // The game is on going

    turn = turn === "O" ? "X" : "O";
    turnObject.innerHTML = "Turn: " + turn;
  }
}
function newGame() {
  turn = "O";
  game_continue = 1;
  winning_condition = 0;
  draw_condition = 0;
  turnObject.innerHTML = "Turn: " + turn;
  winner = "";
  win = false;
  for (block of blocks) {
    block.innerHTML = "";
  }
  // 3. Modify the code here to reset the game to initial state
}

function reset(x, y, d) {
  console.log(blocks[x]);
  console.log(blocks[y]);
  console.log(blocks[d]);
}


let ans = [10, 12, 14, 15, 18, 21, 20, 24, 28];

function checkans() {
  f = parseInt(document.getElementById("ansf").value);
  switch (f) {
    case ans[0]:
      if (game_continue && blocks[0].innerHTML === "") {
        blocks[0].innerHTML = turn;
        checkResult();
      } else {
        checkResult();
      }
      break;
    case ans[1]:
      if (game_continue && blocks[3].innerHTML === "") {
        blocks[3].innerHTML = turn;
        checkResult();
      } else {
        checkResult();
      }
      break;
    case ans[2]:
      if (game_continue && blocks[6].innerHTML === "") {
        blocks[6].innerHTML = turn;
        checkResult();
      } else {
        checkResult();
      }
      break;
    case ans[3]:
      if (game_continue && blocks[1].innerHTML === "") {
        blocks[1].innerHTML = turn;
        checkResult();
      } else {
        checkResult();
      }
      break;
    case ans[4]:
      if (game_continue && blocks[4].innerHTML === "") {
        blocks[4].innerHTML = turn;
        checkResult();
      } else {
        checkResult();
      }
      break;
    case ans[5]:
      if (game_continue && blocks[7].innerHTML === "") {
        blocks[7].innerHTML = turn;
        checkResult();
      } else {
        checkResult();
      }
      break;
    case ans[6]:
      if (game_continue && blocks[2].innerHTML === "") {
        blocks[2].innerHTML = turn;
        checkResult();
      } else {
        checkResult();
      }
      break;
    case ans[7]:
      if (game_continue && blocks[5].innerHTML === "") {
        blocks[5].innerHTML = turn;
        checkResult();
      } else {
        checkResult();
      }
      break;
    case ans[8]:
      if (game_continue && blocks[8].innerHTML === "") {
        blocks[8].innerHTML = turn;
        checkResult();
      } else {
        checkResult();
      }
      break;
    default:
      checkResult();
  }
}
