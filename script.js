var boxes = document.querySelectorAll(".box");
var reset = document.querySelector("#btn-reset");
var msgContainer = document.querySelector("#msg-container");
var msg = document.querySelector("#msg");
let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
] 

function disableBoxes(){
    for (let box of boxes) {
         box.disabled = true;
    }
}

function enableBoxes(){
    for (let box of boxes) {
        box.disabled = false;
        box.innerText ="";
    }
}

function resetGame(){
    turnO= true;
    enableBoxes();
    msgContainer.style.display= "none";
}

function checkWinner(){
    for (let pattern of winPatterns) {
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos0Val = boxes[pattern[0]].innerText;
        let pos1Val = boxes[pattern[1]].innerText;
        let pos2Val = boxes[pattern[2]].innerText;

        if(pos0Val != "" && pos1Val != "" && pos2Val!= ""){
            if(pos0Val== pos1Val && pos1Val == pos2Val){
                showWinner(pos0Val);
                disableBoxes();
            }
           }       
   }
}

function showWinner(winner){
    disableBoxes();
    msgContainer.style.display = "block";
    msg.innerHTML = `Congratulations! Winner is ${winner}`
    reset.innerText = "New Game"; 
    reset.style.backgroundColor = "#45d72b";
}

function clickBox(){
    boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
            if(turnO){
                box.innerText="O";
                box.style.color = "#FBC252";
                turnO= false;
            }
            else{
                box.innerText="X"
                turnO = true;
                box.style.color="#6857c6";
            }
            // this is used so that after click that box is disabled..
            box.disabled = true; 
            checkWinner();
           
        })
    })
}

function clickResetBtn(){
    reset.addEventListener("click",()=>{
        resetGame();
         reset.innerText="Reset Game";
         reset.style.backgroundColor = "#f85757fd";
    })
}



clickBox();
clickResetBtn();










