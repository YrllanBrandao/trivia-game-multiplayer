const Game = require("./game.js");
const isSingle = require("../public/javascript/isSingle");
const Question = require("../question/models/question");
const Score = require("./score")
let online = [];

async function socket(http) {

    const socketio = await require("socket.io")(http);
    const game = Game();
    const score = Score();

    socketio.on("connection", (socket) => {

        //instantiating the game object

        //iniciatilizing the client 
        const client = game.client(socket.id);

        socket.on("connection", (username) => {
            client.username = username

        })
        // DISCONECT
        socket.on("disconnect", (data) => {

            socket.leave(client.room);
            socket.emit("leave")
        })

        // using "queue"
        socket.on('create room', (room) => {
            online.push(client);

            //verifyng if  the player is single on rooom
            if (isSingle(online, client.id)) {
                socket.emit("wait");
                // 
                client.room = room;
                socket.join(client.room);

                console.log(online)
            }
            else {
                //set the last player in room
                const index = online.indexOf(client);
                client.room = online[index - 1].room;

                //starting game and countdown

                console.log(online)
            }
        });
        //TIMER
        socket.on("start timer", () => {
            // verifing  if only i'm online
            const index = online.indexOf(client);
            if (isSingle(online, client.id)) {

            }
            else {
                /*
                CONTINUE
                */
                game.timer = game.countDown(socket, client);



                //starting game
                socket.to(client.room).emit("start", {
                    username1: online[index - 1].username,
                    username2: client.username
                })
                socket.emit("start",
                    {
                        username1: online[index - 1].username,
                        username2: client.username,
                        theLast: true
                    })
                game.online = [...online];
                online = [];

            }

        });
        socket.on("restart timer", () => {
            // game.countDown(socket, client);
            const timer = game.timer;
            timer.myStopFunction()
            game.countDown(socket, client);
        })

        //

        socket.on("select questions", () => {

            Question.findAll({
                limit: 5
            }).then(questions => {
                //send the questions to rooom;

                socket.to(game.client.room).emit("selected questions", questions);
                socket.emit("selected questions", questions);
            })

        });
        // increment points

        socket.on("increment points", () => {



            score.incrementScore(socketio, socket, game.online);

        });

        //checking points
        socket.on("check points", () => {



            score.currentlyScore(socketio, socket, game.online);

        });
        socket.on("increment answer", () => {
            game.incrementAnswer(socketio, socket, game.online)
        })

        //  socket.on("next turn", ()=>{
        //     console.log("resetando")

        //  })
        socket.on("result", () => {
            const player = game.online.find(element => element.id == socket.id);

            socketio.to(player.room).emit("result", game.online);
            socket.emit("result", game.online);
        })

    })

}

module.exports = socket;


