const endgame = document.getElementById("result");
const containerEnd = document.getElementById("container-endgame");
let base = 1
const verifyAnswer = (player1, player2)=>{
    
  
    if(player1.answer === base && player2.answer === base)
    {
        console.log("---RESPONDERAM")
        base++;
        if(questionNumber <= 1)
        {
        resetQuestion();
        }
        else
        {
            socket.emit("check points")
            socket.emit("result")
        }
    }
}

socket.on("result", (result)=>{

    const player01 = result[0];
    const player02 = result[1];

    console.log(player01.points + "<<<< points");
    console.log(player02.points + "<<<< points 2");

   if(player01.points === player02.points)
   {
    endgame.innerHTML = "D R A W";
    containerEnd.style.display = "flex";
   }
   else if(player01.points > player02.points)
   {
    endgame.innerHTML = `${player01.username} win`;
    containerEnd.style.display = "flex";
   }
   else if(player01.points < player02.points){
    endgame.innerHTML = `${player02.username} win`;
    containerEnd.style.display = "flex";
   }

})

socket.on("incremented", (data)=>{
    const myClient = data.find(element  => element.id === socket.id);
    const index = data.indexOf(myClient);

    const player01 = data[0];
    const player02 = data[1];
    verifyAnswer(player01, player02);
    if(index === 0)
    {
        
        player1.dataset.points = player01.points;
        player2.dataset.points = player02.points;
    }
    else{
        
        player1.dataset.points = player02.points;
        player2.dataset.points = player01.points;

        

    }
})

