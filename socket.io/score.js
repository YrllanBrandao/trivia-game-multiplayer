const score = () => {
    const score = {};

    function incrementScore(socketio, socket, online) {
        const POINTS = 10;
        const player = online.find(element => element.id == socket.id);
        const playerIndex = online.indexOf(player);

        online[playerIndex].points = POINTS;
        online[playerIndex].turn++;
        online[playerIndex].answer++


        socketio.to(player.room).emit("incremented", online);
        socket.emit("incremented", online);


    }
    function currentlyScore(socketio, socket, online) {
        const player = online.find(element => element.id == socket.id);
        




        socketio.to(player.room).emit("incremented", online);
        socket.emit("incremented", online);

    }


    score.incrementScore = incrementScore
    score.currentlyScore = currentlyScore


    return score;
}


module.exports = score;