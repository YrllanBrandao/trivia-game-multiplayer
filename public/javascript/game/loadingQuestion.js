

const title = document.getElementById("question-title");
const imageQuestion = document.getElementById("img-question");

const QUESTIONS = []

let questionNumber = 0;


socket.emit("select questions")
socket.on("selected questions", (questions) => {
    
   

   
    questions.forEach(questions_ =>{
        QUESTIONS.push(questions_);
    });

    loadQuestion()

})

function loadQuestion()
{   
    if(questionNumber <= 1)
    {
        title.innerHTML = `Question Nº ${questionNumber+1}`;
    console.log(questionNumber + "q")
    
    const currentlyQuestion = QUESTIONS[questionNumber]
    imageQuestion.src = currentlyQuestion.imageUrl;
    options[0].innerHTML = currentlyQuestion.answer01;
    options[1].innerHTML = currentlyQuestion.answer02;
    options[2].innerHTML = currentlyQuestion.answer03;
    options[3].innerHTML = currentlyQuestion.answer04;
        questionNumber++;
    }
    
    

    
}
function resetQuestion()
{
    
        
        if(questionNumber <= 1)
        {
            timer.style.width = "100%";

        loadQuestion();
        resetOptions()
        }
        // 
}


