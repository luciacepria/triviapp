let questions = []

export function setQuestions(dicc){
    questions = [...questions, ...dicc];
    
}

export function getBasePrompt() {

    return(
        `
    As a trivia question generator, provide me with 3 questions following the format below that will be parsed into the application.
    Keep the questions concise and simple, but not too easy.
    Do not generate any of this questions or any variations of them  ${questions.map(q => `"${q.question}"`).join(", ")}
    Do not generate any header nor footer, just the questions in the format below. 
    Start with the { directly and end with }, do not generate '''JSON''' at any cost, always start with { and end with }.
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

