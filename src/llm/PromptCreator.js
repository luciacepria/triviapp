let questions = [
    {question: "What is the capital of Australia?", answer: "Canberra"}, 
    {question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci"}, 
    {question: "What is the chemical symbol for gold?", answer: "Au"}, 
    {question: "Which planet is known as the Red Planet?", answer: "Mars"}, 
    {question: "In what year did the Titanic sink?", answer: "1912"}]

export function setQuestions(dicc){
    questions = [...questions, ...dicc];
    
}

export function getBasePrompt() {

    return(
        `
    As a trivia question generator, provide me with 3 questions following the format below that will be parsed into the application.
    Keep the questions concise and simple, but not too easy.
    Do not generaty any of this questions  ${questions.map(q => `"${q.question}"`).join(", ")}
    Do not generate any header nor footer, just the questions in the format below. 
    Start with the { directly and end with }.
    Do not generate them inside a code block, just plain text.
    {
        "questions" : [
            {
                "question" : "Question text",
                "answer" : "Answer text"
            },
            {
                "question" : "Question text",
                "answer" : "Answer text"
            },
            {
                "question" : "Question text",
                "answer" : "Answer text"
            }
        ]
    }
`
    );
}

