const express = require("express");
const app = express();
const http = require("http").createServer(app);
const cors = require("cors");

const PORT = 8080;

app.set("view engine", 'ejs');
app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//socket and  module
const adminController = require("./admin/adminController");


//game start
const Socket = require("./socket.io/socket")
Socket(http);

//routes and router
app.use("/", adminController)
app.get("/", (req, res) => {
    const date = new Date();
    const year = date.getFullYear();
    res.render("index", {
        year
    })
});
app.post("/play", (req, res) => {
    const { username} = req.body;

    res.render("play", {
        username
    });
})


http.listen(PORT, () => {
    console.log("Running...")
})