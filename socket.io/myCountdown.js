const MyCountdown = (socket, client, myseconds) => {
    const countdown = {};
    const myInterval = setInterval(myTimer, 200);
    let seconds = myseconds;
    const decrease = 0.25;
    //countDown
    function myTimer() {
        
        seconds -= decrease;

    
            socket.to(client.room).emit("timer", seconds);
            socket.emit("timer", seconds);
        // }

        if (seconds <= 0) {

           
            myStopFunction()
           


        }
        
        
    }
    function interval() {
        
        seconds -= decrease;

    
            socket.to(client.room).emit("interval", seconds);
            socket.emit("interval", seconds);
        // }

        if (seconds <= 0) {

           
            stopInterval()
           


        }
        
    }
    
    function myStopFunction() {
        clearInterval(myInterval);
    }
    function stopInterval() {
        clearInterval(myInterval);
    }
    countdown.myInterval = myInterval;
    countdown.decrease = decrease;
    countdown.myTimer = myTimer;
    countdown.myStopFunction = myStopFunction;
    

    return countdown;
}

module.exports = MyCountdown