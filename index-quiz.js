const questions = [
    {
        question : 'Which is the largest animal in the world?',
        answers : [
            { text : 'Shark', correct : false},
            { text : 'Blue whale', correct : true},
            { text : 'Elephant', correct : false},
            { text : 'Giraffe', correct : false},
        ]
    },
    {
        question : 'Which is the smallest country in the world?',
        answers : [
            { text : 'Vatican city', correct : true},
            { text : 'Bhutan', correct : false},
            { text : 'Nepal', correct : false},
            { text : 'Sri Lanka', correct : false},
        ] 
    },
    {
        question : 'Which is the largest desert in the world?',
        answers : [
            { text : 'Kalahri', correct : false},
            { text : 'Goti', correct : false},
            { text : 'Sahara', correct : false},
            { text : 'Antartica', correct : true},
        ]  
    },
    {
        question : 'Which is the smallest continent in the world?',
        answers : [
            { text : 'Asia', correct : false},
            { text : 'Australia', correct : true},
            { text : 'Aractic', correct : false},
            { text : 'Africa', correct : false},
        ]  
    }
];
const question = document.querySelector('#question');
const answerButtons = document.querySelector('#answer-btn');
const nextButton = document.querySelector('#next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
currentQuestionIndex = 0;
score = 0;
nextButton.innerHTML = 'Next';
showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    question.innerHTML = questionNo + '. ' + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer)
    })

}
function resetState(){
nextButton.style.display = 'none';
while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
}
}
function selectAnswer(e){
const selectedButton = e.target;
const isCorrect = selectedButton.dataset.correct === "true"
if(isCorrect){
selectedButton.classList.add('correct');
score++;
}else {
    selectedButton.classList.add('incorrect')
}
Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === 'true'){
        button.classList.add('correct')
    }
    button.disabled = true
})
nextButton.style.display = 'block';
}

function showScore(){
    resetState();
    question.innerHTML = `you scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}

function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else {
        showScore()
    }
}

nextButton.addEventListener('click',function(){
    if(currentQuestionIndex < questions.length){
    handleNextButton()
    }else {
        startQuiz()
    }
})
startQuiz();


