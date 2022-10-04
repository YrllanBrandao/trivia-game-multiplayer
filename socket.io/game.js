const MyCountdown = require("./myCountdown");

const Game = () => {

    const game = {};
   const turn = 1;

    function client(socketID, username = undefined) {

        return {
            username,
            id: socketID,
            room: undefined,
            points: 0,
            turn: 1,
            answer: 0
        }
    };

    function countDown(socket, client) {

        //turn = 30s  
        let seconds = 30;

        return MyCountdown(socket, client, seconds)



    };
    function incrementAnswer(socketio, socket, online)
    {
        const player = online.find(element => element.id == socket.id);
        const playerIndex = online.indexOf(player);

        online[playerIndex].answer++


        socketio.to(player.room).emit("incremented", online);
        socket.emit("incremented", online)
    }
    
    

    game.client = client;
    game.countDown = countDown;
    game.incrementAnswer = incrementAnswer;
    game.turn = turn;
    return game;
}
module.exports = Game;