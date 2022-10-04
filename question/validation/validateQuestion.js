const Question = require("../models/question")
const validateQuestion = (id, answer)=>{
        Question.findOne({
            where: {
                id
            }
        }).then(question =>{

            
        })
}