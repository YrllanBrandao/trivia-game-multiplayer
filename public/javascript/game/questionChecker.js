const options = document.querySelectorAll(".btn-option");

const questionChecker = (answer) => {

    console.log(answer)
    console.log(questionNumber)
    const question = QUESTIONS[questionNumber-1];

    if (question.correct === answer) {
        options.forEach(option => {
            if (option.dataset.option == answer) {
                option.classList.add("correct-option");
                socket.emit("increment points");

            }
        })

        

        
    }
    else {

        options.forEach(option => {
            if (option.dataset.select == 'true') {
                option.classList.add("wrong-option");
                socket.emit("increment answer");
            }
        })

    }
}

options.forEach(option => {

    option.addEventListener("click", () => {

        option.dataset.select = "true";
        option.classList.add("selected-option");
        questionChecker(option.dataset.option);
        options.forEach(noOption => {
            // disabling button after selected
            if (!noOption.dataset.select) {
                noOption.disabled = true
            }
        })
    })

});

function resetOptions() {
    options.forEach(button => {

        
        button.classList.remove("selected-option")
        button.classList.remove("wrong-option");
        button.classList.remove("correct-option");
        button.disabled = false
        button.dataset.select = '';
        
    })
}