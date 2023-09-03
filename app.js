function startGame(){
    document.querySelector(".welcome").classList.add("cached");
    document.querySelector(".timer_board").classList.remove("cached");
    document.querySelector(".game_board").classList.remove("cached");
}


class GameCell{
    constructor(topwall,rightwall,bottomwall,leftwall){
        this.topwall=topwall;
        this.rightwall=rightwall;
        this.bottomwall=bottomwall;
        this.leftwall=leftwall;
    }
}
var cell = new GameCell(true,false,true,false);
console.log(cell);
var div = document.createElement("div");
div.classList.add("game.cell");
div.style.backgroundColor ="red";
document.body.appendChild(div);
console.log(div);
