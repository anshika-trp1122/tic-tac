let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newgame=document.querySelector(".new-game");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");
let turn0=true;

const winPattrens=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [1,4,7],
    [0,3,6],
    [2,5,8],

];
const resetgame=()=>{
    turn0=true;
    enableBox();
    msgContainer.classList.add("hide");
};
boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        if(turn0){
      box.innerText="0";
      turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });

});
const disabledBox=()=>{
    for( let box of boxes){
        box.disabled=true;

    }
};
const enableBox=()=>{
    for( let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
};
const showWinner =(winner) =>{
    msg.innerText=`congrtulation,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBox();
}
const checkWinner = () => {
    for( let pattern of winPattrens){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;  

        if(pos1Val !="" && pos2Val != "" && pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    
   }
};
newgame.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);