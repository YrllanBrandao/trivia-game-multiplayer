const express = require("express");
const Router = express.Router();
const Question = require("../question/models/question");
Router.get("/admin/question", (req, res)=>{

    res.render("question/index");
})
Router.post("/admin/question/save",async (req, res)=>{
    const {...question} = await req.body;

    Question.create({
        ...question
    }).then(()=>{
        res.status(200).send("Saved!")
    })

})
module.exports = Router;