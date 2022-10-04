const fullContainer = document.getElementById("full-container");
// const username = document.getElementById("username");
const player1 = document.getElementById("player-01");
const player2 = document.getElementById("player-02");

const socket = io("localhost:8080");





// iniatilizing connection
socket.emit("connection", username.value);
socket.emit("create room", Date.now());



// waiting player
socket.on('wait', () => {

    fullContainer.style.display = "flex";
});
// starting game
socket.on('start', (data) => {



    if (data.theLast) {
        player1.innerHTML = "You";
        //data.username2;
        player2.innerHTML = data.username1;
    }
    else {
        player1.innerHTML = "You";
        //data.username1;
        player2.innerHTML = data.username2;
    }



    fullContainer.style.display = "none";
});