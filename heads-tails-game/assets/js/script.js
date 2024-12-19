
// make two players
// ask from one player to choose btw heads and tails
// see if that player chooses heads or tails
// if player 1 chooses heads then wins the game or vise versa

let pOne = document.querySelector(".one");
let pTwo = document.querySelector(".two");
let output = document.querySelector(".output");


const players = ["player 1" , "player 2"]

for (var i = 0; i < players.length; i++) {
    if(players[i] === "player 1") {
      let choose =  prompt("choose between heads and tails");
      if(choose.toLowerCase() === "heads"){
        pOne.textContent = "player 1 = 1"
        pTwo.textContent = "player 2 = 0"
        output.textContent = `${players[i]}won the toss.`
      } else if (choose.toLowerCase() === "tails") {
          pOne.textContent = "player 1 = 0"
        pTwo.textContent = "player 2 = 1"
        output.textContent = `${players[1]} won the toss.`
      }
    }
}

