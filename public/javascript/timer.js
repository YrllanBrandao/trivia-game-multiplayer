
const timer = document.getElementById("countDown");
const MAX_TIME= 30;

let percent;
socket.emit("start timer")


socket.on("timer", (seconds)=>{
    socket.emit("check points")
    

        percent = 100 * seconds / MAX_TIME + "%";
    timer.style.width = percent;

    if(seconds <= 0)
    {
        resetQuestion();
           
    }
    
    
})


